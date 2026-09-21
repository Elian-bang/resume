import { HighlightPayload } from '../types/highlight';

const highlight: HighlightPayload = {
  disable: false,
  list: [
    {
      title: 'Service Ownership',
      description:
        '알림·CRM·통계 서비스의 요구사항을 구체화하고, 설계와 구현부터 운영 개선까지 담당해 왔습니다.',
      keywords: ['Backend', 'System Design', 'Operations'],
    },
    {
      title: 'Engineering Depth',
      description:
        '조회 성능과 트랜잭션 문제를 분석하고, 재현과 비교 실험을 통해 기술 선택의 이유와 한계를 탐구합니다.',
      keywords: ['Performance', 'Transaction', 'Experimentation'],
    },
    {
      title: 'Business Collaboration',
      description:
        '기획·사업·CS팀과 업무 흐름을 살피며, 반복 요청을 줄이는 편집 기능과 운영 판단을 돕는 통계 서비스를 개발했습니다.',
      keywords: ['Collaboration', 'Self-service', 'Business Context'],
    },
  ],
};

export default highlight;
