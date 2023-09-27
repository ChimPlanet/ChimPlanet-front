import {
  Offer,
  OfferDAO,
  parseOfferContentFromResponse,
  parseOfferFromResponse,
} from '@services/entity';
import { createAPI } from './base';

export interface OfferListRequestPayload {
  lastArticleId: number | null;
  size: number;
  page: number;
  sort: string;
  value: any;
  isEnd: any;
}

const parseArrayFromResponse = (d: OfferDAO[]) => d.map(parseOfferFromResponse);

const parseArrayFromResponseNoDup = (d: OfferDAO[]) => {
  const idSet = new Set();
  return parseArrayFromResponse(d).reduce((acc, item) => {
    if (!idSet.has(item.id)) {
      acc.push(item);
      idSet.add(item.id);
    }
    return acc;
  }, [] as Offer[]);
};

const offers = Object.freeze({
  list: createAPI(
    ({ lastArticleId, size, page, sort, isEnd, value }: OfferListRequestPayload) => {
      let query = `?lastArticleId=${lastArticleId}&size=${size}&page=${page}&sort=${sort}`;
      if (value) query += `&lastInputValue=${value}`;
      if (isEnd !== 'ALL') query += `&isEnd=${isEnd}`;
      return { method: 'POST', uri: '/boards' + query };
    },
    {
      parse: parseArrayFromResponse,
    },
  ),
  recent: createAPI(
    { method: 'GET', uri: '/boards/new' },
    {
      parse: parseArrayFromResponse,
    },
  ),
  popular: createAPI(
    { method: 'GET', uri: '/boards/popular' },
    {
      parse: parseArrayFromResponse,
    },
  ),
  get: createAPI((id: string) => ({ method: 'GET', uri: '/boards/' + id }), {
    parse: parseOfferContentFromResponse,
  }),
  searchByTag: createAPI(
    (ids: string[]) => ({
      method: 'GET',
      uri: `/boards/search?searchTagId=${encodeURIComponent(ids.join(','))}`,
    }),
    {
      parse: parseArrayFromResponseNoDup,
    },
  ),
  searchByTitle: createAPI(
    (title: string) => ({
      method: 'GET',
      uri: `/boards/search?title=${encodeURIComponent(title)}`,
    }),
    {
      parse: parseArrayFromResponseNoDup,
    },
  ),
});
export default offers;
