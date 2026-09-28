import { EtcPayload } from '../types/etc';

// 한 시점에 받은 상은 startedAt === endedAt 으로 두어 "~" 없이 표시한다.
const etc: EtcPayload = {
  disable: false,

  list: [
    {
      title: '비트교육과정 (고급)',
      subTitle: 'Windows .NET(C#·WPF·ASP.NET), 모바일 결제·인증 통합 앱 및 WebRTC 화상회의 웹 개발',
      startedAt: '2021-08',
      endedAt: '2022-02',
    },
    {
      title: '우수상',
      subTitle: '우송대학교 창업지원단',
      startedAt: '2021-12',
      endedAt: '2021-12',
    },
    {
      title: '전국 SW 알고리즘 대회 독행상',
      subTitle: '우송대학교 · 구름IDE',
      startedAt: '2021-12',
      endedAt: '2021-12',
    },
    {
      title: '단정상',
      subTitle: '우송대학교 SW사업단',
      startedAt: '2021-05',
      endedAt: '2021-05',
    },
    {
      title: '비트교육과정 (단기)',
      subTitle: 'C · C++ · Java · 자료구조',
      startedAt: '2021-03',
      endedAt: '2021-05',
    },
    {
      title: '장려상',
      subTitle: 'NIA 한국인터넷진흥원 · SK텔레콤',
      startedAt: '2017-11',
      endedAt: '2017-11',
    },
  ],
};

export default etc;
