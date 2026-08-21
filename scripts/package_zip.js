const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = __dirname;
const projectDir = path.resolve(rootDir, '..');
const zipPath = path.join(process.env.USERPROFILE, 'Downloads', 'icu-knowledge-map.zip');
const artifactPath = 'C:\\Users\\fawwa\\.gemini\\antigravity\\brain\\c53a3dd6-8ffb-491b-b033-b654e33b1e2b\\icu-knowledge-map.zip';

if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
if (fs.existsSync(artifactPath)) fs.unlinkSync(artifactPath);

const ps1Path = path.join(rootDir, 'temp_pack.ps1');
const psContent = [
  `$items = Get-ChildItem -Path '${projectDir.replace(/'/g, "''")}' | Where-Object { $_.Name -notin @('node_modules', '.next', '.git', 'icu-knowledge-map.zip') }`,
  `Compress-Archive -Path $items.FullName -DestinationPath '${zipPath.replace(/'/g, "''")}' -Force -CompressionLevel Optimal`,
  `Copy-Item -Path '${zipPath.replace(/'/g, "''")}' -Destination '${artifactPath.replace(/'/g, "''")}' -Force`,
  `$f = Get-Item '${zipPath.replace(/'/g, "''")}'`,
  `Write-Output ('SUCCESS: ' + [math]::Round($f.Length / 1048576, 2) + ' MB')`
].join('\r\n');

fs.writeFileSync(ps1Path, psContent);
try {
  const result = execSync('powershell.exe -ExecutionPolicy Bypass -File "' + ps1Path + '"', { encoding: 'utf8' });
  console.log(result);
} finally {
  if (fs.existsSync(ps1Path)) fs.unlinkSync(ps1Path);
}
