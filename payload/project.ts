import { ProjectPayload } from '../types/project';

// 날짜: 월을 모르는 기간은 'YYYY' 로 쓴다. 한 시점에 끝난 항목은 startedAt === endedAt.
const WHERE = '(주) 플라잉닥터';

const alimtalkChannel = {
  title: '알림톡 채널 확장과 병원 셀프서비스',
  startedAt: '2025-11',
  where: `${WHERE} · 문제 정의 · 채널 확장 구조 설계 · 구현 주도`,
  descriptions: [
    {
      content:
        'SMS 신뢰도는 떨어지고 비용은 오르는데, 발송 흐름이 서비스마다 중복돼 채널 하나를 바꾸려면 전 서비스를 손대야 하던 구조를 개선',
    },
    {
      content: 'ChannelSender 확장 포인트로 알림톡 추가 — 서비스 코드 수정 없이 새 채널을 붙이는 공통 구조로 정립',
      weight: 'MEDIUM' as const,
    },
    {
      content: '알림 유형별 알림톡 우선 발송, 실패하면 SMS로 폴백',
      descriptions: [
        { content: '일 1만 건 규모와 재처리 요구를 기준으로 Kafka 대신 RabbitMQ 선택 (ACK · 재처리 · DLQ)' },
      ],
    },
    {
      content: '전환 구간(전체 발송의 약 2%)에서 건당 단가가 SMS 대비 약 70% 낮음을 검증',
      weight: 'MEDIUM' as const,
    },
    {
      content: '2026년, 병원이 템플릿을 직접 등록하고 운영자가 검수하는 셀프서비스 워크플로우로 확장',
      descriptions: [
        { content: 'NCP 채널·템플릿을 조회 어댑터로 동기화, 하드코딩된 템플릿은 DB 기반으로 전환' },
      ],
    },
  ],
};

const notificationMsa = {
  title: '알림 서버 RabbitMQ 기반 MSA 분리',
  startedAt: '2025',
  endedAt: '2025',
  where: `${WHERE} · 마이크로서비스 분리 제안(팀 리뷰 후 전환) · 구현`,
  descriptions: [
    {
      content:
        '대량 발송 때마다 메인 서버 전체가 부하를 받던 알림 기능을 RabbitMQ 기반 마이크로서비스로 분리 (할당 자원 1core 1GB)',
      weight: 'MEDIUM' as const,
    },
    {
      content: '외부 채널사 API 대기가 대부분인 I/O 바운드라, 스레드를 늘리지 않고 동시성을 확보하도록 Virtual Thread 선택',
    },
    {
      content: '채널 AND/OR 조합이 Spring Batch의 선형 chunk 모델과 맞지 않아, Job/Step 단계 분리 개념만 가져와 직접 구현',
    },
    {
      content: '건별 조회·저장을 chunk 조회 + bulk 처리로 바꿔 피크 시간대 배치 부하와 발송 지연 완화',
    },
    {
      content: '채널별 발송 분석으로 중복·저효율 앱 푸시 20개를 정리해 발송 비용 절감',
    },
  ],
};

const kpiStatistics = {
  title: '진료 통계 KPI 기획 및 개발',
  startedAt: '2025-02',
  endedAt: '2025-07',
  where: `${WHERE} · 리서치 기반 기획 제안 · 지표 정의(사업팀 협의) · KPI 구조 설계·구현 주도`,
  descriptions: [
    {
      content: '병원이 직원·의사 성과를 수기로 관리하고, 재방문·이탈·피크타임을 감각으로만 판단하던 상황을 데이터로 전환',
    },
    {
      content: '병원별·진료과목별 차이를 설정 값으로 모델링해 같은 집계 로직을 재사용',
      weight: 'MEDIUM' as const,
    },
    {
      content: 'EMR을 직접 연동할 수 없어 Excel Import 파이프라인 구현 — 올리면 직원·의사 KPI 리포트가 자동 산출',
    },
    {
      content: '통계 전용 데이터소스로 운영 트래픽과 분리',
      descriptions: [
        { content: '대용량 집계는 Streaming으로 메모리 제어, 병원 간 비교는 CompletableFuture 병렬 처리' },
      ],
    },
    {
      content: '재방문·이탈·피크타임 KPI 대시보드와 Excel 리포트를 집계부터 Vue 화면까지 직접 구현',
    },
  ],
};

const homepageEditor = {
  title: '홈페이지 이미지 템플릿 · 캔버스 편집기',
  startedAt: '2024',
  endedAt: '2025',
  where: `${WHERE} · 요구 정의(기획·CS팀) · 템플릿 구조 설계 · 프론트 구현`,
  descriptions: [
    {
      content: '병원이 이미지 하나를 바꾸려 해도 CS팀이 매번 직접 만들어 전달해야 하던 병목을 셀프서비스로 전환',
    },
    {
      content: '텍스트와 이미지를 분리한 템플릿 데이터 구조와 Fabric.js 캔버스 편집기 구현',
    },
    {
      content: 'CS 제작 요청 주 10건 → 2~3건, 병원이 직접 하는 초기 셋업은 주 2~3건 → 5건으로 증가',
      weight: 'MEDIUM' as const,
    },
    {
      content: '렌더링과 템플릿 상태를 분리해 신규 템플릿을 코드 수정 없이 추가, 변경 객체만 다시 그려 저사양 PC 대응',
    },
  ],
};

const remindQuery = {
  title: '리마인드 알림 조회 성능 개선',
  startedAt: '2024-11',
  endedAt: '2024-11',
  where: `${WHERE} · 원인 분석 · 인덱스 재설계 · 검증 단독`,
  descriptions: [
    {
      content: 'EXPLAIN ANALYZE로 조건식 안의 날짜 계산이 인덱스를 막아 풀 스캔이 나던 원인 규명',
    },
    {
      content: '날짜 계산을 범위 조건으로 바꾸고, 카디널리티 분석으로 복합 인덱스 재설계',
    },
    {
      content: '인덱스를 새로 추가하지 않고 기존 인덱스를 대체해 쓰기 성능 유지 — 응답 5~6초 → 300~400ms',
      weight: 'MEDIUM' as const,
    },
  ],
};

const pushLockContention = {
  title: '[장애] 푸시 발송 락 경합 해소',
  startedAt: '2026',
  endedAt: '2026',
  where: `${WHERE} · 원인 분석 · 수습 · 재발 방지`,
  descriptions: [
    {
      content: '주 2~3회 반복되던 락 경합(lock wait timeout)을 0건으로',
      weight: 'MEDIUM' as const,
    },
    {
      content: '트랜잭션을 잘게 쪼개 0건까지 낮췄지만 다시 발생',
    },
    {
      content: '원인은 트랜잭션 길이가 아니라 락을 잡는 문장의 커밋 시점 — 완료 표시를 건별 즉시 커밋으로 분리해 해소',
    },
  ],
};

const silentFailure = {
  title: "[장애] 썸네일 '조용한 실패' 규명 · 관측 설계",
  startedAt: '2026',
  endedAt: '2026',
  where: `${WHERE} · 관측 · 진단 · 알람 설계`,
  descriptions: [
    {
      content: '실패·폴백 카운트는 0인데 적용률만 급락하는 실패를 휘발성 로그 대신 영구 처리 원장으로 규명',
    },
    {
      content: '적용률(applied/processed)을 알람 지표로 재설계 — 적용 커버리지 95.4% 유지',
      weight: 'MEDIUM' as const,
    },
  ],
};

const project: ProjectPayload = {
  disable: false,
  list: [
    alimtalkChannel,
    pushLockContention,
    silentFailure,
    notificationMsa,
    kpiStatistics,
    homepageEditor,
    remindQuery,
  ],
};

export default project;
