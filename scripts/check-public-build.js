/* eslint-disable no-console */
/**
 * 공개 배포용 빌드 결과에 개인 연락처가 섞이지 않았는지 검사한다.
 * `npm run build:public` 의 마지막 단계로 돌며, 하나라도 걸리면 실패한다.
 *
 * 두 가지를 본다.
 *  1) 구분자가 있는 전화번호 형태 (010-1234-5678 / 010 1234 5678)
 *  2) `.env.local` 에 적어 둔 실제 번호 — 구분자 없이 박혀도 잡히도록 숫자만 남긴 형태까지 함께 찾는다
 * 해시·난수에 우연히 섞인 숫자열을 오탐하지 않도록 구분자 없는 일반 숫자열은 검사하지 않는다.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'docs');

// pre-commit 훅은 빌드 결과 없이도 돌아야 하므로 추적 검사만 실행한다.
const TRACKED_ONLY = process.argv.includes('--tracked-only');

const patterns = [
  { label: '전화번호 형태', re: /01[016789][-.\s]\d{3,4}[-.\s]\d{4}/ },
  { label: 'tel: 링크', re: /tel:\+?\d{7,}/i },
];

// .env.local 의 실제 값도 리터럴로 찾는다 (구분자 없이 박힌 경우 대비)
function readLocalPhone() {
  const envPath = path.join(ROOT, '.env.local');
  if (!fs.existsSync(envPath)) return null;
  const line = fs
    .readFileSync(envPath, 'utf8')
    .split(/\r?\n/)
    .find((l) => l.trim().startsWith('NEXT_PUBLIC_RESUME_PHONE='));
  if (!line) return null;
  const value = line.split('=').slice(1).join('=').trim();
  return value || null;
}

const localPhone = readLocalPhone();
if (localPhone) {
  patterns.push({ label: '.env.local 번호', re: new RegExp(localPhone.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) });
  const digits = localPhone.replace(/\D/g, '');
  if (digits.length >= 9) patterns.push({ label: '.env.local 번호(숫자만)', re: new RegExp(digits) });
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(html|js|json|txt|xml|css)$/.test(entry.name)) files.push(full);
  }
  return files;
}

if (!TRACKED_ONLY) {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(`check-public-build: 빌드 결과(${OUT_DIR})가 없다. 먼저 빌드한다.`);
    process.exit(1);
  }

  const hits = [];

  // 얼굴 사진이 공개 빌드에 섞이지 않았는지 본다 (public/ 의 파일은 그대로 복사되므로)
  for (const name of ['profile.jpg', 'profile.jpeg', 'profile.png']) {
    if (fs.existsSync(path.join(OUT_DIR, name))) hits.push(`${name} — 사진 파일`);
  }

  for (const file of walk(OUT_DIR)) {
    const text = fs.readFileSync(file, 'utf8');
    for (const { label, re } of patterns) {
      if (re.test(text)) hits.push(`${path.relative(OUT_DIR, file)} — ${label}`);
    }
  }

  if (hits.length > 0) {
    console.error('check-public-build: 공개 빌드에 연락처로 보이는 값이 있다. 배포하지 않는다.');
    hits.slice(0, 20).forEach((h) => console.error(`  - ${h}`));
    if (hits.length > 20) console.error(`  … 외 ${hits.length - 20}건`);
    process.exit(1);
  }

  console.log(`check-public-build: 연락처 패턴 없음 (검사 규칙 ${patterns.length}개). 배포 가능.`);
}

// ── git 추적 검사 ────────────────────────────────────────────────
// 위 검사는 docs/ 만 본다. 그래서 out/ 의 제출본 PDF(전화번호·사진 포함)가
// 커밋에 섞여 들어간 적이 있다(2026-09-28). 추적 목록 자체를 함께 본다.
const { execFileSync } = require('child_process');

const FORBIDDEN = [
  { re: /^out\//, label: 'out/ — 제출본 PDF(전화번호·사진)' },
  { re: /(^|\/)profile\.(jpg|jpeg|png)$/i, label: '얼굴 사진' },
  { re: /\.env\..*local$/, label: '로컬 환경변수(연락처)' },
];

// -z 로 받는다. 기본 출력은 한글 파일명을 "out/\353\260\251..." 처럼 따옴표로 감싸
// 이스케이프하기 때문에 경로 정규식이 빗나간다(2026-09-28에 실제로 놓쳤다).
let tracked = [];
try {
  tracked = execFileSync('git', ['ls-files', '-z'], { cwd: ROOT, encoding: 'utf8' })
    .split('\0')
    .filter(Boolean);
} catch {
  console.warn('check-public-build: git 추적 목록을 읽지 못했다 — 이 검사만 건너뛴다.');
}

const trackedHits = [];
for (const file of tracked) {
  for (const { re, label } of FORBIDDEN) {
    if (re.test(file)) trackedHits.push(`${file} — ${label}`);
  }
}

if (trackedHits.length > 0) {
  console.error('check-public-build: 공개 저장소가 추적하면 안 되는 파일이 있다. 커밋하지 않는다.');
  trackedHits.forEach((h) => console.error(`  - ${h}`));
  console.error('  조치: git rm --cached <파일> 후 .gitignore 에 추가한다.');
  process.exit(1);
}

console.log(`check-public-build: 추적 목록에 연락처 산출물 없음 (검사 ${tracked.length}개 파일).`);
