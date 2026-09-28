/* eslint-disable no-console */
/**
 * 제출용 PDF 를 만들고 바로 열어 준다.
 *
 *   npm run pdf                          out/방성민_이력서.pdf 로 뽑고 연다
 *   npm run pdf -- --out "C:/경로.pdf"    경로를 지정한다
 *
 * 배포 전에 눈으로 확인하는 용도다. 빌드(`npm run build:pdf`)는 먼저 돌려 둔다.
 * 확인이 끝나면 `npm run build:public` 을 돌려 docs/ 를 공개본으로 되돌린다.
 */
const { execFileSync, spawn } = require('child_process');
const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DOCS = path.join(ROOT, 'docs');
const PORT = 8973;

const argOut = process.argv.indexOf('--out');
const OUT =
  argOut > -1 && process.argv[argOut + 1]
    ? path.resolve(process.argv[argOut + 1])
    : path.join(ROOT, 'out', '방성민_이력서.pdf');

const CHROME_CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
];

function findChrome() {
  const found = CHROME_CANDIDATES.find((p) => fs.existsSync(p));
  if (!found) {
    console.error('make-pdf: Chrome 을 찾지 못했다. CHROME_CANDIDATES 에 경로를 추가한다.');
    process.exit(1);
  }
  return found;
}

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
};

// 사이트가 /resume/ 아래에 배포되므로 그 경로로 서빙한다.
function createServer() {
  return http.createServer((req, res) => {
    let rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/resume/, '');
    if (rel === '' || rel === '/') rel = '/index.html';
    const file = path.join(DOCS, rel);
    if (!file.startsWith(DOCS) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404, { 'Content-Length': 9, Connection: 'close' }).end('not found');
      return;
    }
    // Content-Length 를 주지 않으면 Chrome 이 응답이 안 끝났다고 보고 계속 기다린다.
    res.writeHead(200, {
      'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream',
      'Content-Length': fs.statSync(file).size,
      Connection: 'close',
    });
    fs.createReadStream(file).pipe(res);
  });
}

if (!fs.existsSync(path.join(DOCS, 'index.html'))) {
  console.error('make-pdf: docs/index.html 이 없다. 먼저 `npm run build:pdf` 를 돌린다.');
  process.exit(1);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.rmSync(OUT, { force: true });

const server = createServer();

server.on('error', (e) => {
  console.error(`make-pdf: 포트 ${PORT} 를 열 수 없다 — ${e.message}`);
  process.exit(1);
});

// 서버가 실제로 뜬 뒤에 Chrome 을 띄운다.
// 먼저 띄우면 ERR_CONNECTION_REFUSED 화면이 그대로 PDF 로 나온다.
server.on('listening', () => {
  // Chrome 은 PDF 를 다 쓰고도 종료하지 않는 경우가 있다(저장소 README 에 적힌 현상).
  // 그래서 종료를 기다리지 않고, 파일 크기가 멈추면 끝난 것으로 보고 직접 정리한다.
  // 프로필 디렉터리는 매번 새로 만든다 — 남은 잠금 파일이 있으면 기동이 멈춘다.
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'make-pdf-'));
  const child = spawn(
    findChrome(),
    [
      '--headless=new',
      '--disable-gpu',
      `--user-data-dir=${profile}`,
      '--no-pdf-header-footer',
      '--virtual-time-budget=10000',
      `--print-to-pdf=${OUT}`,
      `http://127.0.0.1:${PORT}/resume/`,
    ],
    { stdio: 'ignore' },
  );

  const deadline = Date.now() + 90000;
  let lastSize = -1;
  let stable = 0;

  const timer = setInterval(() => {
    const size = fs.existsSync(OUT) ? fs.statSync(OUT).size : 0;
    if (size > 0 && size === lastSize) stable += 1;
    else stable = 0;
    lastSize = size;

    if (stable < 3 && Date.now() < deadline) return;

    clearInterval(timer);
    try {
      child.kill();
    } catch {
      /* 이미 끝났다 */
    }
    server.close();
    fs.rmSync(profile, { recursive: true, force: true });

    if (!fs.existsSync(OUT) || fs.statSync(OUT).size === 0) {
      console.error('make-pdf: PDF 가 만들어지지 않았다. 빌드 결과와 Chrome 경로를 확인한다.');
      process.exit(1);
    }
    finish();
  }, 500);
});

function finish() {
  const kb = Math.round(fs.statSync(OUT).size / 1024);

  // 접속 실패 화면이 그대로 찍힌 PDF 를 넘기지 않는다.
  let text = null;
  try {
    text = execFileSync('pdftotext', ['-enc', 'UTF-8', OUT, '-'], { encoding: 'utf8' });
  } catch {
    text = null;
  }
  if (text !== null && text.replace(/\s/g, '').length < 500) {
    console.error(`make-pdf: 내용이 거의 없는 PDF 다 (${kb} KB). 빌드 결과와 서버를 확인한다.`);
    process.exit(1);
  }

  console.log(`make-pdf: ${OUT} (${kb} KB)`);

  if (process.platform === 'win32') spawn('cmd', ['/c', 'start', '', OUT], { detached: true }).unref();
  else if (process.platform === 'darwin') spawn('open', [OUT], { detached: true }).unref();

  console.log('make-pdf: 확인이 끝나면 `npm run build:public` 으로 docs/ 를 공개본으로 되돌린다.');
}

server.listen(PORT, '127.0.0.1');
