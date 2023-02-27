import {
  getLocalStorageValue,
  isKeyOnLocalStorage,
  setLocalStorageValue,
} from '../localStorage';

/**
 * @class
 * @template T
 */
export default class BaseContext {
  /**
   * @param {string} contextKey
   * @param {T} initialValue
   */
  constructor(contextKey, initialValue) {
    if (!contextKey) throw new Error('contextKey is required');
    this.contextKey = contextKey;
    this.initialValue = initialValue;
    this.initialize();
  }

  initialize() {
    if (!isKeyOnLocalStorage(this.contextKey)) {
      this.set(this.initialValue);
    }
    this.value = getLocalStorageValue(this.contextKey);
  }

  reset() {
    this.value = this.initialValue;
    this.set(this.initialValue);
  }

  /** @param {T} value */
  set(value) {
    this.value = value;
    setLocalStorageValue(this.contextKey, value);
  }
  /** @returns {T} */
  get() {
    return this.value;
  }
}
