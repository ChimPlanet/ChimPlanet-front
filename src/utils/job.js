import { convertStringsToRegExp } from './str';
/**
 * @typedef {object} ResponseJobOfferVO
 * @property {string} boardId
 * @property {string} writer
 * @property {string} title
 * @property {string} articleId
 * @property {string} likeCount
 * @property {string} viewCount
 * @property {string} regDate
 * @property {string} imgUrl
 * @property {string} endStr
 *
 * @typedef {object} JobOfferVO
 * @property {number} boardId
 * @property {string} writer
 * @property {string} title
 * @property {string} articleId
 * @property {number} likeCount
 * @property {number} viewCount
 * @property {string} regDate
 * @property {string} imgUrl
 * @property {boolean} isClosed
 * @property {boolean} isCreate
 * @property {boolean} isRegular
 *
 * @typedef {object} Flags
 * @property {boolean} isCreate
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
    const [title, flags] = JobUtils.__parseTitle(rawElement.title);
    return {
      title,
      boardId: JobUtils.toFieldNumber(rawElement.boardId),
      writer: rawElement.writer,
      articleId: rawElement.articleId,
      likeCount: JobUtils.toFieldNumber(rawElement.likeCount),
      viewCount: JobUtils.toFieldNumber(rawElement.viewCount),
      regDate: rawElement.regDate,
      imgUrl: rawElement.imgUrl,
      // ! Indicate 표시용
      isClosed: rawElement.endStr === END_FLAG,
      isCreate: flags.isCreate,
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
  /**
   * @param {string} rawTitle
   * @return {[string, Flags]}
   */
  static __parseTitle(rawTitle) {
    return [
      JobUtils.__removeUselessWord(rawTitle).trim(),
      {
        isCreate: JobUtils.__checkIsCreate(rawTitle),
        isRegular: JobUtils.__checkIsRegular(rawTitle),
      },
    ];
  }

  /**
   * @param {string} value
   */
  static __checkIsCreate(value) {
    return value.startsWith(TITLE_PREFIX.CREATE);
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
console.log(UselessWordsRegex);

export default JobUtils;
