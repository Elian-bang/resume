import { EducationPayload } from '../types/education';

const education: EducationPayload = {
  disable: false,

  list: [
    {
      title: '우송대학교',
      subTitle: 'IT융합학부 컴퓨터정보보안전공 학사 졸업 (학점 4.17/4.5)',
      startedAt: '2016-03',
      endedAt: '2022-08',
    },
    {
      title: '비트교육과정 (고급)',
      subTitle: 'Windows .NET(C#·WPF·ASP.NET), 모바일 결제·인증 통합 앱 및 WebRTC 화상회의 웹 개발',
      startedAt: '2021-08',
      endedAt: '2022-02',
    },
    {
      title: '비트교육과정 (단기)',
      subTitle: 'C · C++ · Java · 자료구조',
      startedAt: '2021-03',
      endedAt: '2021-05',
    },
  ],
};

export default education;
