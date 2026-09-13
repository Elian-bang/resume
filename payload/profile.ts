import { faEnvelope, faPen, faPhone, faRss } from '@fortawesome/free-solid-svg-icons';
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
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
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
  tagline: '의료 IT 플랫폼의 비용·성능·안정성 문제를 구조로 해결하는 백엔드 개발자',
  headings: [
    // 2023.02 입사 기준
    { value: '3+', label: 'Years of experience' },
    // 일 평균 1만 건 · 월 30만 건 이상
    { value: '10K', label: 'Notifications / day' },
    // notification-reliability-lab · virtual-thread-lab · backend-guardrails
    { value: '3', label: 'Verification labs' },
  ],
};

export default profile;
