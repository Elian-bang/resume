import { GlobalPayload } from '../types/global';

const favicon = '/favicon.ico';

const title = 'Resume: 방성민';
const description = '백엔드 개발자 방성민의 이력서 — 알림 서비스 설계, 통계 서비스 개발, 성능 개선과 안정적인 운영';

export const _global: GlobalPayload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      profile: {
        firstName: 'Seongmin',
        lastName: 'Bang',
        username: 'Elian-bang',
      },
    },
  },
  sectionOrder: [
    'introduce',
    'highlight',
    'experience',
    'project',
    'openSource',
    'skill',
    'education',
    'etc',
  ],
  jsonLd: {
    name: '방성민',
    jobTitle: 'Backend Developer',
    worksFor: '플라잉닥터',
    url: 'https://elian-bang.github.io/resume',
    sameAs: ['https://github.com/Elian-bang', 'https://to-be-a-artist.tistory.com'],
    knowsAbout: ['Java', 'Spring Boot', 'MySQL', 'RabbitMQ', 'Virtual Thread'],
  },
};
