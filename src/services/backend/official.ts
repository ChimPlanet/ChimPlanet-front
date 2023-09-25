import { OfferDAO, parseOfferFromResponse } from '@services/entity';
import { createAPI } from './base';

const official = Object.freeze({
  list: createAPI(
    { method: 'GET', uri: '/officialBoard' },
    {
      parse: (d: OfferDAO[]) => d.map(parseOfferFromResponse),
    },
  ),
});

export default official;
