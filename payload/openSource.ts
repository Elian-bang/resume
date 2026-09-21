import { OpenSourcePayload } from '../types/open-source';

const openSource: OpenSourcePayload = {
  disable: false,
  title: 'SIDE PROJECT',
  list: [
    {
      title: '알림 발송 환경의 트랜잭션·락 경합 재현',
      descriptions: [
        { content: '운영에서 경험한 락 경합의 발생 조건과 개선안별 차이를 확인하기 위한 개인 실험 프로젝트' },
        { content: 'Java·Spring Batch·MySQL 기반 재현 환경에서 트랜잭션 경계와 갱신 방식을 바꾸어 비교하는 실험 구성' },
        { content: 'notification-reliability-lab · GitHub', href: 'https://github.com/Elian-bang/notification-reliability-lab' },
      ],
    },
    {
      title: 'Virtual Thread 적용 조건 측정',
      descriptions: [
        { content: '알림 서버의 동시성 처리 방식을 검토하기 위해 플랫폼 스레드와 Virtual Thread를 비교한 개인 실험 프로젝트' },
        { content: 'DB 접근 여부와 동시 실행 수를 바꾸어 가며 처리량과 스레드 사용량을 측정하고, 가상 스레드가 유효한 조건과 그렇지 않은 조건을 구분' },
        { content: 'virtual-thread-lab · GitHub', href: 'https://github.com/Elian-bang/virtual-thread-lab' },
      ],
    },
    {
      title: '트랜잭션 규칙 자동 검증',
      descriptions: [
        { content: '트랜잭션 관련 개발 규칙 중 자동으로 검사할 수 있는 범위를 살펴보는 개인 프로젝트' },
        { content: 'ArchUnit 규칙과 위반·정상 사례를 구성하고, 규칙 자체를 검사하는 테스트 작성' },
        { content: 'backend-guardrails · GitHub', href: 'https://github.com/Elian-bang/backend-guardrails' },
      ],
    },
  ],
};

export default openSource;
