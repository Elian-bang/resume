import { DateTime } from 'luxon';
import _debug from 'debug';

enum LUXON_DATE_FORMAT {
  YYYY_LL_DD = 'yyyy-LL-dd',
  YYYY_LL = 'yyyy-LL',
  YYYY_DOT_LL = 'yyyy. LL',
  YYYY_DOT_LL_DOT_DD = 'yyyy. LL. dd',
  KINDNESS_FULL = 'DDDD',

  DURATION_KINDNESS = 'y년 M개월',
  DURATION_KINDNESS_ONLY_MONTH = 'M개월',
  DURATION_KINDNESS_ONLY_YEAR = 'y년',
}

function getFormattingDuration(from: DateTime, to: DateTime = DateTime.local()) {
  const log = debug('Util:getFormattingDuration');

  // 햇수 계산을 위해 month에 1개월 추가
  const diff = to.plus({ month: 1 }).diff(from, ['years', 'months']);

  log(diff.milliseconds, diff.get('years'), diff.get('months'));

  // 기간 포맷 결정
  let format;
  if (diff.years > 0 && diff.months === 0) {
    format = LUXON_DATE_FORMAT.DURATION_KINDNESS_ONLY_YEAR;
  } else if (diff.years === 0 && diff.months > 0) {
    // 1년 미만이면 개월만 표시
    format = LUXON_DATE_FORMAT.DURATION_KINDNESS_ONLY_MONTH;
  } else {
    format = LUXON_DATE_FORMAT.DURATION_KINDNESS;
  }

  return diff.toFormat(format);
}

/** YYYY-LL 형식의 날짜 문자열을 YYYY. LL 형식으로 포맷 */
function formatYearMonth(dateStr: string): string {
  // 월을 모르는 기간은 'YYYY' 로 받아 연도만 표시한다
  if (/^\d{4}$/.test(dateStr)) return dateStr;
  return DateTime.fromFormat(dateStr, LUXON_DATE_FORMAT.YYYY_LL).toFormat(
    LUXON_DATE_FORMAT.YYYY_DOT_LL,
  );
}

/** 시작일~종료일 날짜 범위 문자열 생성 */
function formatDateRange(startedAt: string, endedAt?: string): string {
  const start = formatYearMonth(startedAt);
  if (!endedAt) return `${start} ~`;
  // 한 시점에 끝난 항목(시작 = 종료)은 진행 중처럼 보이지 않게 한 번만 표시
  if (endedAt === startedAt) return start;
  return `${start} ~ ${formatYearMonth(endedAt)}`;
}

function debug(channel: string) {
  return _debug(`yosume:${channel}`);
}

const Util = {
  LUXON_DATE_FORMAT,
  getFormattingDuration,
  formatYearMonth,
  formatDateRange,
  debug,
};

export default Util;
