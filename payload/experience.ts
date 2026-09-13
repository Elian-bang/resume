import { ExperiencePayload } from '../types/experience';

const flyingDoctor = {
  title: '(주) 플라잉닥터',
  positions: [
    {
      title: '개발자 / CRM·알림·홈페이지·통계 도메인',
      startedAt: '2023-02',
      descriptions: [
        { content: '의료 IT 플랫폼의 CRM·알림·홈페이지·통계 도메인 백엔드 개발 및 운영' },
        { content: '일 평균 1만 건(월 30만 건 이상) 알림 발송 시스템 설계·운영, RabbitMQ 기반 알림 서버 분리' },
        { content: '수백 개 병원의 홈페이지 운영과 진료 통계 KPI 시스템 기획·개발' },
        { content: '운영 장애의 원인 분석·수습·재발 방지 (락 경합, 조용한 실패 관측)' },
        { content: 'AI 코딩 규칙 문서화(CLAUDE.md·AGENTS.md)와 사내 AI 활용 가이드 전파' },
      ],
      skillKeywords: [
        'Java 21',
        'Spring Boot',
        'Spring Data JPA',
        'QueryDSL',
        'Spring Batch',
        'MyBatis',
        'MySQL',
        'RabbitMQ',
        'Vue.js',
      ],
    },
  ],
};

const experience: ExperiencePayload = {
  disable: false,
  disableTotalPeriod: false,
  list: [flyingDoctor],
};

export default experience;
