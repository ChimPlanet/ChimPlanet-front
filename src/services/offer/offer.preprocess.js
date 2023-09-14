import { convertStringsToRegExp } from '@services/domain.utils';

export function number(value) {
  return parseInt(value);
}

export function title(title) {
  return title
    .replace(UselessWordsRegex, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export function date(value) {
  return value.slice(0, 11);
}

export function dateTime(value) {
  return new Date(value);
}

export function thumbnailURL(value) {
  return typeof value === 'string'
    ? value.replace('f100_100', 'f200_200')
    : value;
}

export function profileImageUrl(value) {
  return typeof value === 'string' ? value : value;
}

export function isThumbnail(value) {
  return typeof value === 'string' && value.length > 5;
}

export function isClosed(value) {
  return value === END_FLAG;
}

export function isRegular(value) {
  return RegularWordRegex.test(value);
}

const END_FLAG = 'END';

// 말머리 리스트
const TITLE_PREFIX = Object.freeze({
  CREATE: '[팀 창설]',
  HIRE_ME: '[팀 구합니다]',
});
// 상시모집 리스트
const REGULAR_WORDS = [
  '(상시모집)',
  '(상시 모집)',
  '[상시모집]',
  '[상시 모집]',
];

// 의미 없는 단어 삭제
const Useless_Words = [
  '(완료)',
  '[완료]',
  '(마감)',
  '[마감]',
  '[모집중]',
  '(모집중)',
  '[급구]',
  '(급구)',
  ...Object.values(TITLE_PREFIX),
  ...Object.values(REGULAR_WORDS),
];
// 정규식

const RegularWordRegex = convertStringsToRegExp(REGULAR_WORDS);

const UselessWordsRegex = convertStringsToRegExp(Useless_Words);
