$items = Get-ChildItem -Path 'C:\Users\fawwa\AppData\Local\Temp\claude\C--Users-fawwa-Downloads\85500f3b-f581-44a9-bf66-4e7647e5b565\scratchpad\icu-knowledge-map\icu-knowledge-map' | Where-Object { $_.Name -notin @('node_modules', '.next', '.git', 'icu-knowledge-map.zip') }
Compress-Archive -Path $items.FullName -DestinationPath 'C:\Users\fawwa\Downloads\icu-knowledge-map.zip' -Force -CompressionLevel Optimal
Copy-Item -Path 'C:\Users\fawwa\Downloads\icu-knowledge-map.zip' -Destination 'C:\Users\fawwa\.gemini\antigravity\brain\c53a3dd6-8ffb-491b-b033-b654e33b1e2b\icu-knowledge-map.zip' -Force
$f = Get-Item 'C:\Users\fawwa\Downloads\icu-knowledge-map.zip'
Write-Output ('SUCCESS: ' + [math]::Round($f.Length / 1048576, 2) + ' MB')