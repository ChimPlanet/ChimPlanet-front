import { createRequester } from './base';
import { typeOfferArray } from './offers';

const list = createRequester(
  { method: 'GET', uri: '/officialBoard' },
  {
    parse: typeOfferArray,
  },
);

const official = Object.assign(list, {});

export default official;
