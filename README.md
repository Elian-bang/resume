# resume-web

방성민의 웹 이력서.

[uyu423/resume-nextjs](https://github.com/uyu423/resume-nextjs) (MIT, © Yu Yongwoo) 를 기반으로 만들었다.
원본 라이선스는 [`LICENSE`](LICENSE) 에 그대로 둔다.

## 원본에서 바꾼 것

- `payload/` 전체 — 내용
- `component/common/Util.ts` — 월을 모르는 기간(`'2025'`)은 연도만, 시작 = 종료인 항목은 한 번만 표시
- `component/profile/image.tsx` · `types/profile.ts` · `styles/globals.css` — 사진이 없으면 이니셜 원
- `component/openSource/index.tsx` · `types/open-source.ts` — 섹션 제목을 payload 로 (`SIDE PROJECT`)

## 규칙

수치는 실제로 측정했거나 본인이 확인한 값만 쓴다. 근거 문서는 따로 관리한다.

## 실행

```bash
npm ci
npm run dev          # http://localhost:3000
npm run build        # docs/ 에 정적 HTML
npm run build:public # 공개 배포용 — 연락처를 강제로 비우고 결과물을 검사한다
npm run build:pdf    # PDF 제출본용 — .env.local 의 전화번호를 넣는다
```

`homepage` 가 `https://elian-bang.github.io/resume` 라서 빌드 결과는 `/resume/` 경로 기준이다.
로컬에서 빌드 결과를 볼 때는 `.preview/resume` 를 `docs/` 로 연결해 `.preview` 를 서빙한다.

## 공개본과 PDF 제출본

전화번호는 **저장소에 두지 않는다.** 로컬 `.env.local`(gitignore 대상)에만 둔다.

```
NEXT_PUBLIC_RESUME_PHONE=010-0000-0000
```

| | 공개본 (github.io) | PDF 제출본 |
|---|---|---|
| 빌드 | `npm run build:public` | `npm run build:pdf` |
| 전화번호 | 없음 (강제로 비움) | 연락처에 표시 |
| "휴대전화 대신 이메일로…" 공지 | 표시 | 표시 안 함 |
| 검사 | `scripts/check-public-build.js` 통과 필수 | — |

**PDF 만드는 절차**

1. `npm run build:pdf`
2. `docs/` 를 로컬 서버로 띄워 브라우저로 연다 (README 위의 `.preview` 방식)
3. 브라우저 인쇄 → 대상 "PDF로 저장", 배경 그래픽 켜기, 여백 기본
4. **PDF 를 만든 뒤에는 반드시 `npm run build:public` 을 다시 돌린다** — 그래야 `docs/` 에 번호가 남지 않는다

**배포 절차 (gh-pages)**

공개 배포는 `docs/` 내용을 `gh-pages` 브랜치로 올리는 수동 작업이다.
`npm run build:public` 이 성공한 뒤에만 올린다. 검사에 걸리면 올리지 않는다.
