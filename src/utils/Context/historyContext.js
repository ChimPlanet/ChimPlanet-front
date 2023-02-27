import BaseContext from './baseContext';

/** @extends {BaseContext<string[]>} */
export class HistoryContext extends BaseContext {
  static #instance;

  constructor() {
    super('history', []);
  }

  remove(sentence) {
    this.set(this.get().filter((s) => s !== sentence));
  }

  add(sentence) {
    this.set([...this.get(), sentence]);
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
