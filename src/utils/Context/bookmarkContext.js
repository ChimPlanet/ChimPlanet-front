import BaseContext from './baseContext';

/** @extends {BaseContext<number[]>} */
export class BookmarkContext extends BaseContext {
  static #instance;

  // ! 자료구조 Set 으로 바꾸기

  constructor() {
    super('bookmark', []);
  }

  toggle(id) {
    const idx = this.get().indexOf(id);
    if (idx === -1) {
      this.get().push(id);
    } else {
      this.get().splice(idx, 1);
    }
    this.save();
  }

  getBookmarkSet() {
    return new Set(this.get());
  }

  /**
   * @returns {BookmarkContext}
   */
  static getInstance() {
    if (!BookmarkContext.#instance) {
      BookmarkContext.#instance = new BookmarkContext();
    }
    return BookmarkContext.#instance;
  }
}
