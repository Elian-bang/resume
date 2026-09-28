import { IntroducePayload } from '../types/introduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IntroducePayload = {
  disable: false,
  contents: [
    '병원 대상 의료 IT 서비스의 알림·CRM·통계 도메인을 담당해 온 4년차 풀스택 개발자입니다. Java·Spring Boot 백엔드가 주력이고, 운영자·병원이 쓰는 화면은 Vue 로 직접 만들었습니다. 알림 서버를 RabbitMQ 기반 별도 서비스로 분리하고 발송 채널을 확장했으며, 조회 성능과 락 경합 문제를 원인부터 좁혀 해결해 왔습니다. 운영에서 겪은 문제는 개인 실험으로 재현해 기술 선택의 근거를 확인합니다.',
  ],
  sign: 'Seongmin',
  latestUpdated: latestUpdatedAt,
};

export default introduce;
