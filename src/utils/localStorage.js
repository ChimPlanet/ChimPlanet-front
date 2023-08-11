/**
 *  @typedef {"key" | "value"} _Type
 *  Key의 최소 길이
 */
const MIN_KEY_LENGTH = 3;

/**
 * @description Type에 따라 값이 올바른지 확인합니다
 * @param {_Type} type 입력된 값의 type(key | value) 제약조건 구분
 * @param {*} value value 사용될 값
 */
function validate(type, value) {
  switch (true) {
    case value === null || value === undefined:
      throw new LocalStorageInvalidError(type, value, 'null/undefined');
    case type === 'key' &&
      (typeof value !== 'string' || value.length < MIN_KEY_LENGTH):
      throw new LocalStorageInvalidError(type, value, 'check key condition');
  }
}
/**
 * LocalStorage 에서 값을 가져옵니다.
 * @param {string} key
 */
export function getLocalStorageValue(key) {
  validate('key', key);
  const rawValue = localStorage.getItem(key);
  return JSON.parse(rawValue);
}
/**
 * LocalStorage에 값을 설정합니다.
 * @param {string} key
 * @param {*} value
 */
export function setLocalStorageValue(key, value) {
  validate('key', key);
  validate('value', value);

  localStorage.setItem(key, JSON.stringify(value));
}
/**
 * LocalStorage에 Key가 있는지 확인합니다.
 * @param {string} key
 * @returns
 */
export function isKeyOnLocalStorage(key) {
  validate('key', key);
  return localStorage.getItem(key) !== null;
}

/**
 * Key 또는 Value 에 관한 Error
 */
class LocalStorageInvalidError extends Error {
  /**
   * @param {_Type} type
   * @param {*} value
   * @param {string} message
   */
  constructor(type, value, message) {
    super(`[LocalStorageInvalidError] Entered ${type} ${value}, ${message}`);
    this.type = type;
    this.value = value;
  }
}
