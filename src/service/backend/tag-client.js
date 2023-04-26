import { select } from 'useful-decorator';
import HttpClient from './http-client';
import { Tag } from '../tag';

class TagClient extends HttpClient {
  constructor() {
    super('TagService', '/tag');
  }

  @select(typeTagArray)
  async tagList() {
    return await this.get('/tagList');
  }

  async tag(param) {
    return await this.post('',param);
  }

}

function typeTagArray(values) {
    return values.map(Tag);
}

export default TagClient;