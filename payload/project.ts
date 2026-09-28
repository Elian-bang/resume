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
        { content: '맥락 — 알림 발송이 메인 서버에 붙어 있어 대량 발송 때마다 서비스 전체가 부하를 받았고, 발송 흐름이 서비스마다 중복 구현돼 채널을 바꾸려면 전 서비스를 손대야 하는 구조였다' },
        { content: '대량 발송이 메인 서버에 주는 부하와 서비스별로 중복된 발송 흐름을 구조적으로 분리하고, 채널 확장이 가능한 발송 시스템으로 재설계' },
        {
          content: '2025 · 알림 서버 분리',
          weight: 'MEDIUM',
          descriptions: [
            { content: '팀 리뷰를 거쳐 RabbitMQ 기반 별도 서비스로 분리하고, 외부 API 호출을 Virtual Thread로 병렬 처리' },
            { content: '설계 판단 — 일 평균 1만 건 규모와 재처리 요구를 기준으로 Kafka 대신 RabbitMQ 선택. ACK · 재처리 · DLQ 를 활용한 비동기 발송 경로 구성' },
            { content: '설계 판단 — 발송이 외부 채널사 API 대기가 대부분인 I/O 바운드라는 점을 근거로, 스레드 수를 늘리지 않고 동시성을 확보하는 Virtual Thread 기반 구조 선택' },
            { content: '건별 조회·저장을 묶음 조회와 일괄 처리로 전환해 배치 처리 구조 개선' },
          ],
        },
        {
          content: '2025.11 · 알림톡 채널 확장',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기존 발송 호출부를 건드리지 않고 ChannelSender 확장 포인트로 알림톡 추가. 새 채널을 서비스 코드 수정 없이 도입하는 공통 구조로 정립' },
            { content: '알림 유형별로 알림톡을 우선 발송하고 실패 시 SMS 로 폴백하는 채널 선택 정책 구현. 템플릿 변수 치환과 검증은 채널과 무관하게 공통화' },
            { content: '알림톡 우선 발송으로 전환되는 구간에서 건당 단가가 SMS 대비 약 70% 낮음을 확인' },
          ],
        },
        {
          content: '2026 · 템플릿 셀프서비스',
          weight: 'MEDIUM',
          descriptions: [
            { content: '하드코딩된 템플릿을 DB 기반으로 전환하고, 병원이 등록한 템플릿을 운영자가 검수하는 셀프서비스 흐름으로 확장' },
            { content: 'NCP 채널·템플릿을 조회 어댑터로 동기화하고, OTP 인증을 알림톡 우선(실패 시 SMS)으로 전환' },
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
        { content: '맥락 — 병원은 직원·의사 성과를 수기로 관리했고, 재방문·이탈·피크타임은 감각으로만 판단하던 상황이었다' },
        { content: '수기로 관리하던 진료 성과 지표를 집계 서비스로 대체', weight: 'MEDIUM' },
        { content: '병원별·진료과목별 차이를 설정 값으로 모델링해 공통 집계 로직을 재사용' },
        { content: 'EMR 직접 연동이 어려운 환경에서 Excel 데이터를 가져와 직원·의사별 지표를 산출하는 파이프라인 구현' },
        { content: '통계 전용 데이터소스를 분리하고, 스트리밍 집계와 CompletableFuture 기반 병렬 처리 적용' },
        { content: '제약 환경 부하시험에서 일별 통계 집계 실패율 86% → 0%, 직원 요약 통계 응답 중앙값 9.1초 → 5.2초 (단계 분리 전후 비교)' },
      ],
    },
    {
      title: '홈페이지 이미지 편집 셀프서비스',
      startedAt: '2024',
      endedAt: '2025',
      where: `${WHERE} · 기획·CS팀과 요구 정의 / 템플릿 구조 설계 / 편집기 구현`,
      descriptions: [
        { content: '맥락 — 병원이 홈페이지 이미지를 바꾸려면 CS팀이 매번 직접 만들어 전달해야 했고, 요청 한 건마다 며칠씩 기다리던 병목이 있었다' },
        { content: '텍스트와 이미지를 분리한 템플릿 데이터 구조를 설계하고, 저장·조회 API 와 템플릿 버전 관리를 구현' },
        { content: 'Fabric.js 기반 캔버스 편집기를 직접 구현. 렌더링과 편집 상태를 분리해 템플릿 추가를 지원하고, 변경된 객체만 다시 그리도록 구성' },
        { content: '도입 후 이미지 제작 관련 CS 요청 주 10건 → 2~3건, 같은 기간 병원이 직접 하는 초기 셋업은 주 2~3건 → 5건', weight: 'MEDIUM' },
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
            { content: 'EXPLAIN ANALYZE로 날짜 계산 조건의 풀 스캔을 확인하고, 범위 조건 전환으로 인덱스 Range Scan 복원' },
            { content: '설계 판단 — 인덱스를 새로 추가하지 않고 카디널리티 분석으로 기존 복합 인덱스를 대체 설계해 쓰기 성능을 유지' },
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
            { content: '요청 건수 대비 실제 적용 건수의 비율(applied/processed)을 알람 지표로 재설계해, 실패로 집계되지 않는 누락도 탐지되도록 개선. 적용 커버리지 95.4% 확인' },
          ],
        },
      ],
    },
  ],
};

export default project;
