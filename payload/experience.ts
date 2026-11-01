import { ExperiencePayload } from '../types/experience';

const experience: ExperiencePayload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주) 플라잉닥터',
      positions: [
        {
          title: '풀스택 개발자',
          startedAt: '2023-02',
          descriptions: [
            { content: '병원 대상 의료 IT 서비스의 알림·CRM·통계 도메인을 백엔드 중심으로 담당하고, 운영자·병원용 화면은 프론트까지 직접 구현' },
            { content: '2023년에는 통합 클라이언트와 화면을 만들었고, 2024년에는 Vue3·TypeScript 전환과 문자 과금 기능을 개발했다. 2025년부터는 통계 서비스와 알림 서버를 맡았으며, 알림 도메인은 2023년부터 계속 담당했다' },
            { content: 'CRM 이벤트 기반 자동발송, 발송 이력 관리 및 포인트 기반 문자 과금 기능 개발' },
            { content: '템플릿 데이터 구조를 설계하고 셀프서비스 편집 기능을 개발해, 이미지 제작 관련 CS 요청을 주 10건에서 2~3건으로 줄임' },
            { content: '기획·사업팀과 통계 요구사항 및 지표를 정의하고, 집계 파이프라인과 조회 API 설계' },
            { content: '운영 장애 분석, 데이터베이스 조회 최적화 및 처리 결과 모니터링 개선' },
            { content: '주간 회의에서 설계 방향을 제안·합의하고, 배포 범위와 일정을 기획·디자인과 협의해 결정. 배포 전 변경 내용을 CS팀에 사전 공유하는 절차로 운영' },
            { content: '2026년부터 담당 범위 일부를 다른 개발자에게 넘기고, 해당 프로젝트의 이관을 돕는 역할로 참여 범위를 조정' },
          ],
        },
      ],
    },
  ],
};

export default experience;
