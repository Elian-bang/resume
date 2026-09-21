import { ProjectPayload } from '../types/project';

const WHERE = '(주) 플라잉닥터';

const project: ProjectPayload = {
  disable: false,
  list: [
    {
      title: '알림 서비스 분리 및 발송 채널 확장',
      startedAt: '2025',
      where: `${WHERE} · 서버 분리 제안·구현 / 채널 확장 설계·구현 주도`,
      descriptions: [
        { content: '대량 발송이 메인 서버에 주는 부하와 서비스별로 중복된 발송 흐름을 구조적으로 분리하고, 채널 확장이 가능한 발송 시스템으로 재설계' },
        {
          content: '2025 · 알림 서버 분리',
          weight: 'MEDIUM',
          descriptions: [
            { content: '팀 리뷰를 거쳐 RabbitMQ 기반 별도 서비스로 분리하고, 외부 API 호출을 Virtual Thread로 병렬 처리' },
            { content: '건별 조회·저장을 묶음 조회와 일괄 처리로 전환해 배치 처리 구조 개선' },
          ],
        },
        {
          content: '2025.11 · 알림톡 채널 확장',
          weight: 'MEDIUM',
          descriptions: [
            { content: '채널별 발송 구현을 공통 인터페이스로 분리하고, 알림톡 우선 발송 및 실패 시 SMS 전환 정책 구현' },
            { content: '검증 당시 전체 발송의 약 2%인 전환 구간에서 건당 단가가 SMS 대비 약 70% 낮음을 확인' },
          ],
        },
        {
          content: '2026 · 템플릿 셀프서비스',
          weight: 'MEDIUM',
          descriptions: [
            { content: '하드코딩된 템플릿을 DB 기반으로 전환하고, 병원이 등록한 템플릿을 운영자가 검수하는 흐름으로 확장' },
          ],
        },
      ],
    },
    {
      title: '통계 집계 및 KPI 리포트 서비스 개발',
      startedAt: '2025-02',
      endedAt: '2025-07',
      where: `${WHERE} · 기획 제안 / 사업팀과 지표 정의 / 집계·화면 구현 주도`,
      descriptions: [
        { content: '수기로 관리하던 진료 성과와 재방문·이탈·피크타임을 데이터로 확인할 수 있도록 KPI 서비스 기획·개발' },
        { content: '병원별·진료과목별 차이를 설정 값으로 모델링해 공통 집계 로직을 재사용', weight: 'MEDIUM' },
        { content: 'EMR 직접 연동이 어려운 환경에서 Excel 데이터를 가져와 직원·의사별 KPI를 산출하는 파이프라인 구현' },
        { content: '통계 전용 데이터소스를 분리하고, 스트리밍 집계와 CompletableFuture 기반 병렬 처리 적용' },
        { content: '집계 결과를 Vue 대시보드와 Excel 리포트로 제공해 병원이 운영 현황과 성과를 확인할 수 있는 기능 구현' },
      ],
    },
    {
      title: '서비스 성능 및 안정성 개선',
      startedAt: '2024',
      endedAt: '2026',
      where: `${WHERE} · 개별 개선 사례 / 조회 최적화 단독 수행 / 장애 분석·조치·관측 설계`,
      descriptions: [
        {
          content: '2024.11 · 리마인드 알림 조회 최적화',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'EXPLAIN ANALYZE로 날짜 계산 조건의 풀 스캔을 확인하고, 범위 조건 전환과 기존 복합 인덱스 재설계 수행' },
            { content: '리마인드 알림 조회 응답 시간을 약 5~6초에서 300~400ms로 단축' },
          ],
        },
        {
          content: '2026 · 푸시 발송 락 경합 대응',
          weight: 'MEDIUM',
          descriptions: [
            { content: '반복되는 lock wait timeout을 분석해 완료 표시의 커밋 지연을 확인하고, 해당 갱신을 건별 커밋으로 분리' },
          ],
        },
        {
          content: '2026 · 썸네일 처리 결과 관측 개선',
          weight: 'MEDIUM',
          descriptions: [
            { content: '실패 카운트에 드러나지 않는 썸네일 미적용을 영구 처리 기록으로 추적하고, worker의 추출 결과가 null인 사례 확인' },
            { content: '전체 처리 건수 대비 실제 적용 건수의 비율을 알람 지표로 설계해 결과 누락을 탐지하도록 개선' },
          ],
        },
      ],
    },
    {
      title: '홈페이지 이미지 편집 셀프서비스 개발',
      startedAt: '2024',
      endedAt: '2025',
      where: `${WHERE} · 기획·CS팀과 요구 정의 / 템플릿 구조 설계 / 편집기 구현`,
      descriptions: [
        { content: '이미지 수정마다 CS팀이 제작·전달하던 흐름을 병원이 직접 편집할 수 있는 셀프서비스로 전환' },
        { content: '텍스트와 이미지를 분리한 템플릿 데이터 구조 및 Fabric.js 기반 캔버스 편집기 구현' },
        { content: '렌더링과 편집 상태를 분리해 템플릿 추가를 지원하고, 변경된 객체만 다시 그리도록 구성' },
        { content: '도입 후 홈페이지 이미지 제작 관련 CS 요청이 주 10건에서 2~3건으로 감소', weight: 'MEDIUM' },
      ],
    },
  ],
};

export default project;
