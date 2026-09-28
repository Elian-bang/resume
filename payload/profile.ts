import { faEnvelope, faPen, faPhone, faRss } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { ProfilePayload, ProfileContact } from '../types/profile';
import { homepage } from '../package.json';

/**
 * 전화번호는 저장소에 두지 않는다. PDF 제출본을 만들 때만 로컬 `.env.local` 에서 읽는다.
 * - 값이 있으면: 연락처에 전화번호가 들어가고, "이메일로 연락" 공지는 뺀다.
 * - 값이 없으면(= 공개 배포): 지금까지와 같이 이메일만 노출한다.
 * 공개 빌드 `npm run build:public` 은 이 값을 강제로 비우고, 결과물에 번호가 없는지 검사한다.
 */
const phone = process.env.NEXT_PUBLIC_RESUME_PHONE?.trim();
const photoName = process.env.NEXT_PUBLIC_RESUME_PHOTO?.trim();

// 사이트가 /resume/ 아래에 있어서(assetPrefix), payload 의 이미지 경로에도 같은 접두어를 붙인다.
// 붙이지 않으면 인쇄할 때 /profile.jpg 를 찾다가 404 가 나고 사진이 깨진다.
const assetPrefix = (() => {
  if (process.env.NODE_ENV !== 'production') return '';
  try {
    const { pathname } = new URL(homepage);
    return pathname === '/' ? '' : pathname.replace(/\/$/, '');
  } catch {
    return '';
  }
})();
const photo = photoName ? `${assetPrefix}${photoName}` : undefined;

const phoneContact: ProfileContact[] = phone
  ? [{ title: phone, link: `tel:${phone.replace(/[^0-9+]/g, '')}`, icon: faPhone }]
  : [];

// 공개본에는 공지 박스를 두지 않는다. 연락 수단은 위 목록으로 충분하다.
const emailNotice = undefined;

const profile: ProfilePayload = {
  disable: false,

  // 사진은 저장소에 두지 않는다. PDF 제출본 빌드에서만 .env.local 의 값으로 들어간다.
  image: photo || undefined,
  initial: '방',
  name: {
    title: '방성민',
    small: '(Elian)',
  },
  contact: [
    ...phoneContact,
    {
      title: 'bangseongmin@naver.com',
      link: 'mailto:bangseongmin@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'GitHub',
      link: 'https://github.com/Elian-bang',
      icon: faGithub,
    },
    {
      title: 'Blog',
      link: 'https://to-be-a-artist.tistory.com',
      icon: faRss,
    },
    {
      title: 'TIL',
      link: 'https://github.com/Elian-bang/TIL',
      icon: faPen,
    },
  ],
  notice: emailNotice,
  tagline: '서비스 개발부터 성능 개선과 안정적인 운영까지 담당하는 백엔드 개발자',
};

export default profile;
