import { TagDAO, parseTagFromResponse } from '@services/entity';
import { createAPI } from './base';

const tags = Object.freeze({
  list: createAPI(
    {
      method: 'GET',
      uri: '/tag/tagList',
    },
    {
      parse: (p: TagDAO[]) => p.map(parseTagFromResponse),
    },
  ),
});

export default tags;
