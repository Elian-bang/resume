import { IntroducePayload } from '../types/introduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IntroducePayload = {
  disable: false,

  contents: [
    '의료 IT 플랫폼에서 알림, 통계, 홈페이지, CRM 도메인을 개발하고 운영해 온 백엔드 개발자입니다. Java 21, Spring Boot, MySQL, RabbitMQ를 주로 사용하며, 일 평균 1만 건(월 30만 건 이상)의 알림 발송과 수백 개 병원의 홈페이지, 진료 통계 시스템을 설계하고 운영해 왔습니다. 1core 1GB처럼 자원이 제한된 환경에서는 무엇을 늘릴지보다 구조를 먼저 고민합니다.',
    '운영에서 찾은 문제는 원인 분석부터 재발 방지까지 직접 마무리합니다. 주 2~3회 반복되던 푸시 발송 락 경합은 트랜잭션을 잘게 쪼개도 다시 발생했고, 원인을 트랜잭션 길이가 아닌 락을 잡는 문장의 커밋 시점으로 좁혀 0건으로 만들었습니다. 리마인드 알림 조회는 풀 스캔 원인을 규명해 응답을 5~6초에서 300~400ms로 줄였습니다.',
    '운영에서 내린 판단은 통제된 환경에서 다시 재서 확인합니다. 락 경합 처방 비교, Virtual Thread의 유효 조건 측정, 트랜잭션 규칙의 CI 차단을 공개 저장소로 남겼고, 측정 결과가 기존 설명과 다르면 설명을 고칩니다.',
  ],
  sign: 'Seongmin',
  latestUpdated: latestUpdatedAt,
};

export default introduce;
