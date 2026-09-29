import { HighlightPayload } from '../types/highlight';

const highlight: HighlightPayload = {
  disable: false,
  list: [
    {
      title: '알림 서버 분리와 채널 확장',
      description:
        '병원 440여 곳에 월 2만 건대를 보내는 발송을, 메인 서버에서 RabbitMQ 기반 별도 서비스로 분리하자고 제안하고 전환했습니다. 새 채널은 서비스 코드를 고치지 않고 확장 포인트만 추가하면 되는 구조로 정립했습니다. 1년 동안 SMS 35,194건 → 14,821건(−58%), 알림톡 0 → 4,517건으로 전환했고 알림톡 건당 단가는 SMS 대비 약 70% 낮습니다.',
      keywords: ['RabbitMQ', 'MSA', 'System Design'],
    },
    {
      title: '진료 통계 KPI 서비스 0 → 1',
      description:
        '수기로 관리하던 진료 성과 지표를 서비스로 만들었습니다. 기획을 제안하고 사업팀과 지표를 정의한 뒤, 사용자가 기준일을 바꾸는 항목까지 담을 수 있는 집계 구조를 설계·구현했습니다. 제약 환경(1Core/1GB) 부하시험에서 동시 100명 평균 응답 26.7초 → 2.73초, 처리량 10.8배.',
      keywords: ['Data Pipeline', 'Batch', 'Product'],
    },
    {
      title: '락 경합의 원인을 커밋 시점까지 좁힘',
      description:
        '트랜잭션을 잘게 나눠도 재발하던 lock wait timeout 을, 원인이 트랜잭션 길이가 아니라 락을 잡는 문장의 커밋 시점임을 확인해 주 2~3회에서 0건으로 없앴습니다. 이후 같은 장애를 실험실에서 재현해 처방별 효과를 측정으로 확인했습니다.',
      keywords: ['Transaction', 'Troubleshooting', 'MySQL'],
    },
  ],
};

export default highlight;
