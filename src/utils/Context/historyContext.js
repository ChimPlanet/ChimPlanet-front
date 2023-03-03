import BaseContext from './baseContext';

/** @extends {BaseContext<string[]>} */
export class HistoryContext extends BaseContext {
  static #instance;

  constructor() {
    super('history', []);
  }

  /**
   * @param {number} id
   */
  removeByIndex(index) {
    this.get().splice(index, 1);
    this.save();
  }
  /**
   * @param {string[]} sentences
   */
  addFront(sentences) {
    this.set([...sentences, ...this.get()]);
  }

  /**
   * @returns {HistoryContext}
   */
  static getInstance() {
    if (!HistoryContext.#instance) {
      HistoryContext.#instance = new HistoryContext();
    }
    return HistoryContext.#instance;
  }
}
