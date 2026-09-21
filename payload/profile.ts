import { faEnvelope, faPen, faPhone, faRss } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import { ProfilePayload, ProfileContact } from '../types/profile';

/**
 * 전화번호는 저장소에 두지 않는다. PDF 제출본을 만들 때만 로컬 `.env.local` 에서 읽는다.
 * - 값이 있으면: 연락처에 전화번호가 들어가고, "이메일로 연락" 공지는 뺀다.
 * - 값이 없으면(= 공개 배포): 지금까지와 같이 이메일만 노출한다.
 * 공개 빌드 `npm run build:public` 은 이 값을 강제로 비우고, 결과물에 번호가 없는지 검사한다.
 */
const phone = process.env.NEXT_PUBLIC_RESUME_PHONE?.trim();

const phoneContact: ProfileContact[] = phone
  ? [{ title: phone, link: `tel:${phone.replace(/[^0-9+]/g, '')}`, icon: faPhone }]
  : [];

const emailNotice = phone
  ? undefined
  : { title: '휴대전화 대신 이메일로 연락 부탁드립니다.', icon: faBell };

const profile: ProfilePayload = {
  disable: false,

  // 사진이 생기면 public/ 에 넣고 image: '/파일명.jpg' 로 지정한다. 없으면 initial 이 표시된다.
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
      link: 'https://github.com/Elian-bang',
      icon: faGithub,
    },
    {
      link: 'https://to-be-a-artist.tistory.com',
      icon: faRss,
    },
    {
      link: 'https://github.com/Elian-bang/TIL',
      icon: faPen,
    },
  ],
  notice: emailNotice,
  tagline: '서비스 개발부터 성능 개선과 안정적인 운영까지 담당하는 백엔드 개발자',
};

export default profile;
