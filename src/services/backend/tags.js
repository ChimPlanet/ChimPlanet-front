import { parseTagFromResponse } from '@services/entity';
import { createAPI } from './base';

const list = createAPI(
  {
    method: 'GET',
    uri: '/tag/tagList',
  },
  {
    /** @returns {import('@services/entity').Tag[]} */
    parse: (p) => p.map(parseTagFromResponse),
  },
);

const get = createAPI((param) => ({
  method: 'POST',
  uri: '/tag',
  data: param,
}));

const tags = Object.assign(list, {
  get,
});

export default tags;
