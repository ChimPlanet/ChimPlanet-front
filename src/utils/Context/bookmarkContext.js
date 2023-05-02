import BaseContext from './baseContext';

/** @extends {BaseContext<number[]>} */
export class BookmarkContext extends BaseContext {
  static #instance;

  // ! 자료구조 Set 으로 바꾸기

  constructor() {
    super('bookmark', []);
  }

  toggle(offer) {
    const idx = this.get().findIndex((el) => el.articleId === offer.articleId);
    if (idx === -1) {
      this.get().push(offer);
    } else {
      this.get().splice(idx, 1);
    }
    this.save();
  }

  getBookmarkSet() {
    return new Set(this.get().map((el) => parseInt(el.articleId)));
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
