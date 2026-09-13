import { OpenSourcePayload } from '../types/open-source';

const notificationReliabilityLab = {
  title: 'notification-reliability-lab',
  descriptions: [
    { content: '운영 장애(푸시 발송 락 경합)를 재현해, 네 가지 처방 중 무엇이 실제로 들었는지 측정' },
    { content: '처방별 3회 재현 — 넷 중 둘만 효과, 진짜 피해는 실패 건수가 아니라 처리량 저하' },
    { content: 'Java 21 · Spring Batch · MySQL 8.0 · Docker' },
    {
      content: 'https://github.com/Elian-bang/notification-reliability-lab',
      href: 'https://github.com/Elian-bang/notification-reliability-lab',
    },
  ],
};

const virtualThreadLab = {
  title: 'virtual-thread-lab',
  descriptions: [
    { content: '알림 서버의 Virtual Thread 선택을 1core 1GB에서 조건 26개 × 3회(78회)로 검증' },
    { content: 'DB 미접촉·동시 500에서 처리량 2배(스레드 214 → 17), DB 접촉 시 12.8배 저하 — 병목은 커넥션 풀이 아니라 캐리어' },
    { content: 'Java 21 · Spring Boot 3.3 · MySQL Connector/J 8.3.0 · Docker' },
    {
      content: 'https://github.com/Elian-bang/virtual-thread-lab',
      href: 'https://github.com/Elian-bang/virtual-thread-lab',
    },
  ],
};

const backendGuardrails = {
  title: 'backend-guardrails',
  descriptions: [
    { content: '리뷰어 경험에 의존하던 트랜잭션 규칙을 CI가 merge 를 막게 전환' },
    { content: 'ArchUnit 규칙 6개 · 경계 사례로 오탐률 측정 · 규칙을 검사하는 메타 테스트 · PR 차단(BLOCKED → CLEAN) 확인' },
    { content: 'Java · ArchUnit · GitHub Actions' },
    {
      content: 'https://github.com/Elian-bang/backend-guardrails',
      href: 'https://github.com/Elian-bang/backend-guardrails',
    },
  ],
};

const openSource: OpenSourcePayload = {
  disable: false,
  title: 'SIDE PROJECT',
  list: [notificationReliabilityLab, virtualThreadLab, backendGuardrails],
};

export default openSource;
