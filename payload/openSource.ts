import { OpenSourcePayload } from '../types/open-source';

const openSource: OpenSourcePayload = {
  disable: false,
  title: 'SIDE PROJECT',
  list: [
    {
      title: '알림 발송 환경의 트랜잭션·락 경합 재현',
      descriptions: [
        { content: '운영에서 겪은 락 경합을 다시 만들고, 트랜잭션 경계와 갱신 방식을 바꿔 가며 결과를 비교한 개인 실험' },
        { content: '완료 표시를 건별로 커밋했을 때만 실패가 0건이었다. 다른 변경안은 효과를 확인하지 못했고, 판단할 수 없는 범위도 저장소에 적었다' },
        { content: 'notification-reliability-lab · GitHub', href: 'https://github.com/Elian-bang/notification-reliability-lab' },
      ],
    },
    {
      title: '리뷰 규칙을 CI 가 막게 만들기',
      descriptions: [
        { content: '장애에서 나온 규칙 6개를 ArchUnit 으로 구현하고, 같은 PR에서 위반 커밋은 차단되고 위반을 제거한 커밋은 통과하는 것을 확인한 개인 실험' },
        { content: '규칙도 테스트로 검증했다. 첫 실행에서 클래스만 검사하는 규칙과 메서드에 붙인 위반 예시가 맞지 않는 것을 찾았다' },
        { content: '간접 호출은 검사 범위 밖이라고 표시했다. 규칙마다 위반 예시가 하나뿐이라 실제 코드의 탐지율과 오탐률은 아직 측정하지 않았다' },
        { content: 'backend-guardrails · GitHub', href: 'https://github.com/Elian-bang/backend-guardrails' },
      ],
    },
    {
      title: 'Virtual Thread 적용 조건 측정',
      descriptions: [
        { content: '플랫폼 스레드와 가상 스레드를 조건 26개에서 각 3회 비교하고, 결과를 확인하기 위해 JDK와 JDBC 드라이버 조건도 바꿔 235회를 측정' },
        { content: 'DB를 거치지 않는 경로에서는 유리했지만, DB를 거치는 경로에서는 결과가 뒤집혔다. 캐리어 수에 민감한 것은 확인했지만 드라이버가 원인인지는 아직 확인하지 못했다' },
        { content: 'virtual-thread-lab · GitHub', href: 'https://github.com/Elian-bang/virtual-thread-lab' },
      ],
    },
  ],
};

export default openSource;
