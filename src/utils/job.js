import { convertStringsToRegExp } from './str';
/**
 * @typedef {object} ResponseJobOfferVO
 * @property {string} writer
 * @property {string} boardTitle
 * @property {string} articleId
 * @property {string} likeCount
 * @property {string} readCount
 * @property {string} regDate
 * @property {string} isEnd
 * @property {string} redirectURL
 * @property {string} thumbnailURL
 *
 * @typedef {object} JobOfferVO
 * @property {string} writer
 * @property {string} title
 * @property {string} id
 * @property {number} likeCount
 * @property {number} viewCount
 * @property {string} regDate
 * @property {boolean} isClosed
 * @property {string} redirectURL
 * @property {boolean} isRegular
 * @property {string} thumbnailURL
 * @property {string} isThumbnail
 *
 * @typedef {object} Flags
 * @property {boolean} isRegular
 *
 */

const JobUtils = class {
  static cast(elementOrArray) {
    return Array.isArray(elementOrArray)
      ? elementOrArray.map(JobUtils.__transform)
      : JobUtils.__transform(elementOrArray);
  }
  /**
   * @param {ResponseJobOfferVO} rawElement
   * @returns {JobOfferVO}
   */
  static __transform(rawElement) {
    const [title, flags] = JobUtils.__parseTitle(rawElement.boardTitle);
    return {
      title,
      id: JobUtils.toFieldNumber(rawElement.articleId),
      writer: rawElement.writer,
      likeCount: JobUtils.toFieldNumber(rawElement.likeCount),
      viewCount: JobUtils.toFieldNumber(rawElement.readCount),
      regDate: JobUtils.__parseDate(rawElement.regDate),
      thumbnailURL: JobUtils.__preprocessThumbnailQuery(
        rawElement.thumbnailURL,
      ),
      isThumbnail: rawElement.thumbnailURL.length > 0,
      // ! Indicate 표시용
      isClosed: rawElement.endStr === END_FLAG,
      isRegular: flags.isRegular,
    };
  }
  /**
   * @param {string} value
   * @returns {number}
   */
  static toFieldNumber(value) {
    return parseInt(value);
  }

  /** @param {string} value */
  static __parseDate(value) {
    return value.slice(0, 11);
  }

  /** @param {string} value */
  static __preprocessThumbnailQuery(value) {
    return value.replace('f100_100', 'f200_200');
  }

  /**
   * @param {string} rawTitle
   * @return {[string, Flags]}
   */
  static __parseTitle(rawTitle) {
    return [
      JobUtils.__removeUselessWord(rawTitle).trim(),
      {
        isRegular: JobUtils.__checkIsRegular(rawTitle),
      },
    ];
  }
  /**
   * @param {string} value
   */
  static __checkIsRegular(value) {
    return RegularWordRegex.test(value);
  }

  /**
   * @param {string} value
   */
  static __removeUselessWord(value) {
    return value.replace(UselessWordsRegex, '');
  }
};

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
const RegularWordRegex = convertStringsToRegExp(REGULAR_WORDS);

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
const UselessWordsRegex = convertStringsToRegExp(Useless_Words);

export default JobUtils;
