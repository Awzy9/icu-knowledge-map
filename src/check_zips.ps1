Add-Type -AssemblyName System.IO.Compression.FileSystem

$zips = @(
  "icu-knowledge-map-final.zip",
  "icu-knowledge-map-completed.zip",
  "icu-knowledge-map.zip",
  "..\icu-knowledge-map-final.zip",
  "..\icu-knowledge-map-completed.zip"
)

foreach ($z in $zips) {
  if (Test-Path $z) {
    Write-Host "=== ZIP: $z ==="
    $zip = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path $z))
    foreach ($entry in $zip.Entries) {
      if ($entry.FullName -like "*medication*" -or $entry.FullName -like "*meropenem*" -or $entry.FullName -like "*vancomycin*") {
        Write-Host $entry.FullName
      }
    }
    $zip.Dispose()
  }
}
