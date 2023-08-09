import { select } from 'useful-decorator';
import HttpClient from './http-client';
import { typeOfferArray } from './offer-client';

class OfficialClient extends HttpClient {
  constructor() {
    super('OfficialClient', '/officialBoard');
  }

  async official() {
    return await this.post('/');
  }

  @select(typeOfferArray)
  async list() {
    return await this.get('');
  }
}

export default OfficialClient;
