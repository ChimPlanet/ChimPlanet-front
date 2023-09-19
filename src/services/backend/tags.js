import { Tag } from '../tag';
import { createRequester } from './base';

const list = createRequester(
  {
    method: 'GET',
    uri: '/tag/tagList',
  },
  {
    parse: typeTagArray,
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

function typeTagArray(values) {
  return values.map(Tag);
}

export default tags;
