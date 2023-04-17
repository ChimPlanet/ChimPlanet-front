import HttpClient from './http-client';

class BoardClient extends HttpClient {
  constructor() {
    super('BoardClient', '/admin/board');
  }

  /** @param {import('../board/board-request').updateBoardRequest} body*/
  async updateBoard(body) {
    return await this.put('/updateBoard/', body);
  }

}

export default BoardClient;
