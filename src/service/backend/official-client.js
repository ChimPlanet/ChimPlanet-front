import HttpClient from './http-client';

class OfficialClient extends HttpClient {
  constructor() {
    super('OfficialClient', '/officialBoard');
  }

  async official() {
    return await this.post('/');
  }

}

export default OfficialClient;
