import { GlobalPayload } from '../types/global';

const favicon = '/favicon.ico';

const title = 'Resume: 방성민';
const description = '백엔드 개발자 방성민의 이력서 — 의료 IT 플랫폼의 알림·통계·홈페이지·CRM 도메인';

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
    'presentation',
    'article',
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
