import { parseTagFromResponse } from '@services/entity';
import { createRequester } from './base';

const list = createRequester(
  {
    method: 'GET',
    uri: '/tag/tagList',
  },
  {
    /** @returns {import('@services/entity').Tag[]} */
    parse: (p) => p.map(parseTagFromResponse),
  },
);

const get = createRequester((param) => ({
  method: 'POST',
  uri: '/tag',
  data: param,
}));

const tags = Object.assign(list, {
  get,
});

export default tags;
