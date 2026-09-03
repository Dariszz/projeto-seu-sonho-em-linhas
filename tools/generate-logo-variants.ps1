param(
    [string]$Source = "$PSScriptRoot\..\assets\images\victor-muller-logo-master.png",
    [string]$OutputDirectory = "$PSScriptRoot\..\assets\images"
)

Add-Type -AssemblyName System.Drawing

function Get-AlphaBounds {
    param([System.Drawing.Bitmap]$Bitmap, [int]$AlphaThreshold = 8)
    $minX = $Bitmap.Width; $minY = $Bitmap.Height; $maxX = -1; $maxY = -1
    for ($y = 0; $y -lt $Bitmap.Height; $y++) {
        for ($x = 0; $x -lt $Bitmap.Width; $x++) {
            if ($Bitmap.GetPixel($x, $y).A -gt $AlphaThreshold) {
                if ($x -lt $minX) { $minX = $x }
                if ($y -lt $minY) { $minY = $y }
                if ($x -gt $maxX) { $maxX = $x }
                if ($y -gt $maxY) { $maxY = $y }
            }
        }
    }
    if ($maxX -lt 0) { throw 'A imagem não contém pixels visíveis.' }
    return [System.Drawing.Rectangle]::FromLTRB($minX, $minY, $maxX + 1, $maxY + 1)
}

function Copy-CroppedBitmap {
    param([System.Drawing.Bitmap]$Bitmap, [System.Drawing.Rectangle]$Bounds, [int]$Padding = 48)
    $result = [System.Drawing.Bitmap]::new($Bounds.Width + 2 * $Padding, $Bounds.Height + 2 * $Padding, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $graphics = [System.Drawing.Graphics]::FromImage($result)
    $graphics.Clear([System.Drawing.Color]::Transparent)
    $graphics.DrawImage($Bitmap, [System.Drawing.Rectangle]::new($Padding, $Padding, $Bounds.Width, $Bounds.Height), $Bounds, [System.Drawing.GraphicsUnit]::Pixel)
    $graphics.Dispose()
    return $result
}

function Convert-LogoColor {
    param([System.Drawing.Bitmap]$Bitmap, [System.Drawing.Color]$Color)
    $result = [System.Drawing.Bitmap]::new($Bitmap.Width, $Bitmap.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    for ($y = 0; $y -lt $Bitmap.Height; $y++) {
        for ($x = 0; $x -lt $Bitmap.Width; $x++) {
            $alpha = $Bitmap.GetPixel($x, $y).A
            $result.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $Color.R, $Color.G, $Color.B))
        }
    }
    return $result
}

function New-SquareAsset {
    param(
        [System.Drawing.Bitmap]$Logo,
        [int]$Size,
        [System.Drawing.Color]$Background,
        [double]$Scale = 0.72
    )
    $result = [System.Drawing.Bitmap]::new($Size, $Size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $graphics = [System.Drawing.Graphics]::FromImage($result)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.Clear($Background)
    $max = [int]($Size * $Scale)
    $ratio = [Math]::Min($max / $Logo.Width, $max / $Logo.Height)
    $width = [int]($Logo.Width * $ratio); $height = [int]($Logo.Height * $ratio)
    $x = [int](($Size - $width) / 2); $y = [int](($Size - $height) / 2)
    $graphics.DrawImage($Logo, $x, $y, $width, $height)
    $graphics.Dispose()
    return $result
}

function Save-Png { param([System.Drawing.Bitmap]$Bitmap, [string]$Path) $Bitmap.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png) }

$sourceBitmap = [System.Drawing.Bitmap]::FromFile((Resolve-Path -LiteralPath $Source))
$bounds = Get-AlphaBounds $sourceBitmap
$cropped = Copy-CroppedBitmap $sourceBitmap $bounds 64

$charcoal = [System.Drawing.Color]::FromArgb(32, 33, 36)
$white = [System.Drawing.Color]::White
$offWhite = [System.Drawing.Color]::FromArgb(247, 246, 241)

$primary = Convert-LogoColor $cropped $charcoal
$light = Convert-LogoColor $cropped $white
Save-Png $primary (Join-Path $OutputDirectory 'victor-muller-logo-primary.png')
Save-Png $light (Join-Path $OutputDirectory 'victor-muller-logo-white.png')

# The upper 78% of the tight artwork isolates the VM symbol from the wordmark.
$symbolHeight = [int]($cropped.Height * 0.78)
$symbolRect = [System.Drawing.Rectangle]::new(0, 0, $cropped.Width, $symbolHeight)
$symbolBase = Copy-CroppedBitmap $primary $symbolRect 0
$symbolBounds = Get-AlphaBounds $symbolBase
$symbol = Copy-CroppedBitmap $symbolBase $symbolBounds 48
$symbolWhite = Convert-LogoColor $symbol $white
Save-Png $symbol (Join-Path $OutputDirectory 'victor-muller-symbol-primary.png')
Save-Png $symbolWhite (Join-Path $OutputDirectory 'victor-muller-symbol-white.png')

$profile = New-SquareAsset $primary 1024 $offWhite 0.78
Save-Png $profile (Join-Path $OutputDirectory 'victor-muller-logo-profile.png')

foreach ($size in @(32, 192, 512)) {
    $favicon = New-SquareAsset $symbol $size $offWhite 0.76
    Save-Png $favicon (Join-Path $OutputDirectory "favicon-$size.png")
    $favicon.Dispose()
}

$profile.Dispose(); $symbolWhite.Dispose(); $symbol.Dispose(); $symbolBase.Dispose()
$light.Dispose(); $primary.Dispose(); $cropped.Dispose(); $sourceBitmap.Dispose()
