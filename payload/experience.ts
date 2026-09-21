import { ExperiencePayload } from '../types/experience';

const experience: ExperiencePayload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주) 플라잉닥터',
      positions: [
        {
          title: '백엔드 개발자',
          startedAt: '2023-02',
          descriptions: [
            { content: '병원 대상 의료 IT 서비스의 알림·CRM·통계 백엔드 개발 및 운영' },
            { content: 'CRM 이벤트 기반 자동발송, 발송 이력 관리 및 포인트 기반 문자 과금 기능 개발' },
            { content: '기획·사업팀과 통계 요구사항 및 지표를 정의하고, CS팀과 홈페이지 운영·편집 기능 개선' },
            { content: '운영 장애 분석, 데이터베이스 조회 최적화 및 처리 결과 모니터링 개선' },
          ],
          skillKeywords: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'QueryDSL', 'Spring Batch', 'MyBatis', 'MySQL', 'RabbitMQ', 'Vue.js'],
        },
      ],
    },
  ],
};

export default experience;
