import { faEnvelope, faPen, faRss } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import { ProfilePayload } from '../types/profile';

const profile: ProfilePayload = {
  disable: false,

  // 사진이 생기면 public/ 에 넣고 image: '/파일명.jpg' 로 지정한다. 없으면 initial 이 표시된다.
  initial: '방',
  name: {
    title: '방성민',
    small: '(Elian)',
  },
  contact: [
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
  notice: {
    title: '휴대전화 대신 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
  tagline: '서비스 개발부터 성능 개선과 안정적인 운영까지 담당하는 백엔드 개발자',
};

export default profile;
