// 간단 정적 서버 — 실행: node server.js  →  http://localhost:5173
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = process.env.PORT || 5173;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.gif': 'image/gif',
  '.svg': 'image/svg+xml', '.json': 'application/json',
  '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.glb': 'model/gltf-binary',
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath.endsWith('/')) urlPath += 'index.html';
  const file = path.join(ROOT, path.normalize(urlPath));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('404 Not Found'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
});

// 포트가 사용 중이면 다음 번호로 자동 이동 (5173 → 5174 → ...)
function listen(port) {
  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') listen(port + 1);
    else throw err;
  });
  server.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(`3D 오락실 서버 실행 중: ${url}`);
    if (process.env.OPEN_BROWSER) require('child_process').exec(`start "" ${url}`);
  });
}
listen(Number(PORT));
