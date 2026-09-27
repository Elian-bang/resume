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
            { content: '템플릿 데이터 구조를 설계하고 셀프서비스 편집 기능을 개발해, 이미지 제작 관련 CS 요청을 주 10건에서 2~3건으로 줄임' },
            { content: '기획·사업팀과 통계 요구사항 및 지표를 정의하고, 집계 파이프라인과 조회 API 설계' },
            { content: '운영 장애 분석, 데이터베이스 조회 최적화 및 처리 결과 모니터링 개선' },
          ],
        },
      ],
    },
  ],
};

export default experience;
