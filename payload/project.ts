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
            { content: '알림톡 우선 발송으로 전환되는 구간에서 건당 단가가 SMS 대비 약 70% 낮음을 확인' },
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
      where: `${WHERE} · 기획 제안 / 사업팀과 지표 정의 / 집계 설계·구현 주도`,
      descriptions: [
        { content: '수기로 관리하던 진료 성과 지표를 집계 서비스로 대체', weight: 'MEDIUM' },
        { content: '병원별·진료과목별 차이를 설정 값으로 모델링해 공통 집계 로직을 재사용' },
        { content: 'EMR 직접 연동이 어려운 환경에서 Excel 데이터를 가져와 직원·의사별 지표를 산출하는 파이프라인 구현' },
        { content: '통계 전용 데이터소스를 분리하고, 스트리밍 집계와 CompletableFuture 기반 병렬 처리 적용' },
        { content: '제약 환경 부하시험에서 일별 통계 집계 실패율 86% → 0%, 직원 요약 통계 응답 중앙값 9.1초 → 5.2초 (단계 분리 전후 비교)' },
      ],
    },
    {
      title: '서비스 성능 및 안정성 개선',
      startedAt: '2024',
      endedAt: '2026',
      where: `${WHERE} · 단독 수행`,
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
            { content: '발송 배치가 콘텐츠 행을 잡은 채 커밋하지 않아 상세 조회가 lock wait timeout 으로 실패했다. 원인을 트랜잭션 길이가 아니라 완료 표시의 커밋 시점으로 좁혀 해당 갱신을 건별 커밋으로 분리' },
            { content: '반복되던 락 경합 timeout 주 2~3회 → 0건 (발송 대상 평균 1천 명 규모)' },
          ],
        },
        {
          content: '2026 · 썸네일 처리 결과 관측 개선',
          weight: 'MEDIUM',
          descriptions: [
            { content: '이미지 변환이 실패로 기록되지 않은 채 결과만 누락되는 사례가 있었다. 처리 이력을 따로 남겨 추적한 결과, 변환 프로세스가 결과를 돌려주지 못한 경우를 확인' },
            { content: '요청 건수 대비 실제 적용 건수의 비율을 알람 지표로 설계해, 실패로 집계되지 않는 누락도 탐지되도록 개선' },
          ],
        },
      ],
    },
  ],
};

export default project;
