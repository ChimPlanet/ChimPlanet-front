import BaseContext from './baseContext';

/** @extends {BaseContext<number[]>} */
export class BookmarkContext extends BaseContext {
  static #instance;

  constructor() {
    super('bookmark', []);
  }

  toggle(id) {
    this.set(
      this.get().indexOf(id) === -1 // id가 없는 경우
        ? this.get().concat(id) // id를 추가
        : this.get().splice(idx, 1), // id를 제거
    );
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
