import { HighlightPayload } from '../types/highlight';

const highlight: HighlightPayload = {
  disable: false,
  list: [
    {
      title: '알림 서버 분리와 채널 확장',
      description:
        '메인 서버에 있던 발송 기능을 RabbitMQ 기반 별도 서비스로 옮기자고 제안하고 구현했습니다. 기존 발송 호출을 바꾸지 않고 알림톡을 추가했고, 새 채널도 같은 방식으로 추가할 수 있게 했습니다. 월 기준 SMS는 35,194건에서 14,821건으로 줄고, 알림톡은 4,517건이 발송됐습니다. 알림톡을 쓰는 구간의 건당 단가는 SMS보다 약 70% 낮았습니다.',
      keywords: ['RabbitMQ', 'MSA', 'System Design'],
    },
    {
      title: '진료 통계 KPI 서비스 0 → 1',
      description:
        '수기로 관리하던 진료 성과 지표를 서비스로 만들었습니다. 사업팀과 지표를 정하고, 기준일을 바꿔 보는 통계도 처리하도록 구현했습니다. JVM 1Core·1GB 환경의 동시 사용자 100명 시험에서 평균 응답 시간은 26.7초에서 2.73초로, 처리량은 3.33에서 35.9 TPS로 개선됐습니다.',
      keywords: ['Data Pipeline', 'Batch', 'Product'],
    },
    {
      title: '락 경합의 원인을 커밋 시점까지 좁힘',
      description:
        '주 2~3회 발생하던 lock wait timeout의 원인이 트랜잭션 길이가 아니라 완료 표시가 커밋되는 시점임을 확인했습니다. 완료 표시는 건별로 바로 커밋하게 바꿔 0건으로 줄였습니다. 이후 같은 상황을 개인 실험으로 다시 만들고 변경안별 결과를 비교했습니다.',
      keywords: ['Transaction', 'Troubleshooting', 'MySQL'],
    },
  ],
};

export default highlight;
