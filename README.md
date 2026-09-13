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

수치는 실제로 측정했거나 본인이 확인한 값만 쓴다. 근거는 비공개 `resume-management/05_평가/수치검증.md`.

## 실행

```bash
npm ci
npm run dev          # http://localhost:3000
npm run build        # docs/ 에 정적 HTML
```

`homepage` 가 `https://elian-bang.github.io/resume` 라서 빌드 결과는 `/resume/` 경로 기준이다.
로컬에서 빌드 결과를 볼 때는 `.preview/resume` 를 `docs/` 로 연결해 `.preview` 를 서빙한다.
