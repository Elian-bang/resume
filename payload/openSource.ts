import { OpenSourcePayload } from '../types/open-source';

const openSource: OpenSourcePayload = {
  disable: false,
  title: 'SIDE PROJECT',
  list: [
    {
      title: '알림 발송 환경의 트랜잭션·락 경합 재현',
      descriptions: [
        { content: '운영에서 겪은 락 경합을 재현해, 트랜잭션 경계와 갱신 방식을 바꾸어 가며 처방별 차이를 비교한 개인 실험' },
        { content: '알게 된 것 — 락을 잡는 문장의 커밋 시점이 문제였고, 처방 비교는 설계가 부족해 하나만 효과를 확인할 수 있었다. 무엇을 판정할 수 없는지까지 저장소에 적었다' },
        { content: 'notification-reliability-lab · GitHub', href: 'https://github.com/Elian-bang/notification-reliability-lab' },
      ],
    },
    {
      title: 'Virtual Thread 적용 조건 측정',
      descriptions: [
        { content: '플랫폼 스레드와 가상 스레드를 조건 26개 × 3회로 비교하고, 원인을 확인하기 위해 JDK 와 JDBC 드라이버를 바꿔 가며 235회를 다시 측정' },
        { content: '알게 된 것 — DB 를 거치지 않는 경로에서는 유리하지만 거치는 경로에서는 뒤집힌다. 원인은 드라이버 안의 pinning 이었고, 가설 4개 중 2개는 반증됐다' },
        { content: 'virtual-thread-lab · GitHub', href: 'https://github.com/Elian-bang/virtual-thread-lab' },
      ],
    },
  ],
};

export default openSource;
