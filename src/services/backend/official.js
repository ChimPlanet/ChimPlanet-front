import { createAPI } from './base';
import { typeOfferArray } from './offers';

const list = createAPI(
  { method: 'GET', uri: '/officialBoard' },
  {
    parse: typeOfferArray,
  },
);

const official = Object.assign(list, {});

export default official;
