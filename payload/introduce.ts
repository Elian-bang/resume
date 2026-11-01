import { IntroducePayload } from '../types/introduce';
import { latestUpdatedAt } from '../package.json';

const introduce: IntroducePayload = {
  disable: false,
  contents: [
    '병원 대상 의료 IT 서비스의 알림·CRM·통계 도메인을 담당해 온 4년차 풀스택 개발자입니다. Java·Spring Boot 백엔드가 주력이고, 운영자·병원이 쓰는 화면은 Vue 로 직접 만들었습니다. 2023년부터 알림을 맡아 메인 서버에 있던 발송 기능을 RabbitMQ 기반 별도 서비스로 옮기고, 알림톡 등 새 채널을 추가했습니다. 조회 성능과 락 경합 문제는 원인을 확인해 고쳤습니다. 발송 결과가 실제와 다르게 집계되거나 실패가 표시되지 않는 문제도 찾아, 화면과 알람에서 확인할 수 있게 했습니다. 운영에서 겪은 문제는 개인 실험으로 다시 만들어 기술 선택의 조건과 한계를 확인합니다.',
  ],
  sign: 'Seongmin',
  latestUpdated: latestUpdatedAt,
};

export default introduce;
