import { data, field } from '@/utils/decorator';
import { convertStringsToRegExp } from '@/utils/str';

@data
class Offer {
  @field('articleId', parseInt)
  id;
  @field('writer')
  writer;
  @field('boardTitle', parseTitle)
  title;
  @field('likeCount', parseInt)
  likeCount;
  @field('readCount', parseInt)
  viewCount;
  @field('regDate', parseDate)
  regDate;
  @field('regDate', parseDateTime)
  regDateTime;
  @field('redirectURL')
  redirectURL;
  @field('thumbnailURL', parseThumbnailURL)
  thumbnailURL;
  @field('isEnd', isClosed)
  isClosed;
  @field('boardTitle', isRegular)
  isRegular;
  @field('thumbnailURL', isThumbnail)
  isThumbnail;
}

function parseTitle(title) {
  return title.replace(UselessWordsRegex, '');
}

function parseDate(value) {
  return value.slice(0, 11);
}

function parseDateTime(value) {
  return new Date(value);
}

function parseThumbnailURL(value) {
  return typeof value === 'string'
    ? value.replace('f100_100', 'f200_200')
    : value;
}

function isThumbnail(value) {
  return typeof value === 'string' && value.length > 0;
}

function isClosed(value) {
  return value === END_FLAG;
}

function isRegular(value) {
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

export { Offer };
