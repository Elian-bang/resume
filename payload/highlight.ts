import { HighlightPayload } from '../types/highlight';

const highlight: HighlightPayload = {
  disable: false,
  list: [
    {
      title: 'Structure over Patches',
      description:
        '채널 확장 포인트, 셀프서비스 전환처럼 반복되는 수정과 요청을 구조로 없애 왔습니다',
      keywords: ['Extensibility', 'MSA', 'Self-service'],
    },
    {
      title: 'Root Cause to Prevention',
      description:
        '락 경합의 원인을 커밋 시점까지 좁히고, 적용률을 알람 지표로 바꿔 재발을 막았습니다',
      keywords: ['Transaction', 'Index', 'Observability'],
    },
    {
      title: 'Measured Decisions',
      description:
        '운영에서 내린 판단을 통제된 환경에서 다시 재서 확인하고, 그 기록을 공개 저장소로 남깁니다',
      keywords: ['Reproduction', 'Benchmark', 'CI Guardrail'],
    },
  ],
};

export default highlight;
