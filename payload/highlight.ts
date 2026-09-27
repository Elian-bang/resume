import { HighlightPayload } from '../types/highlight';

const highlight: HighlightPayload = {
  disable: false,
  list: [
    {
      title: '조회 5~6초 → 300~400ms',
      description:
        '리마인드 알림 조회가 날짜 계산 조건 때문에 풀 스캔을 타는 것을 EXPLAIN ANALYZE 로 확인하고, 범위 조건 전환과 복합 인덱스 재설계로 해결했습니다.',
      keywords: ['MySQL', 'Index'],
    },
    {
      title: '락 경합 timeout 주 2~3회 → 0건',
      description:
        '반복되던 lock wait timeout 의 원인을 트랜잭션 길이가 아니라 완료 표시의 커밋 시점으로 좁히고, 해당 갱신을 건별 커밋으로 분리했습니다.',
      keywords: ['Transaction', 'Troubleshooting'],
    },
    {
      title: 'CS 요청 주 10건 → 2~3건',
      description:
        '이미지 제작을 CS팀이 대신하던 흐름을, 템플릿 데이터 구조를 설계해 병원이 직접 편집하는 방식으로 바꿨습니다.',
      keywords: ['API Design', 'Self-service'],
    },
  ],
};

export default highlight;
