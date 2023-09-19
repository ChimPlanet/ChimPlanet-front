import { Offer, OfferContent } from '@services/offer';
import { createRequester } from './base';

const list = createRequester(
  (id, size, page, sort, isEnd, value) => {
    let query = '';

    if (isEnd === 'ALL') {
      query =
        value === null
          ? `?lastArticleId=${id}&size=${size}&page=${page}&sort=${sort}`
          : `?lastArticleId=${id}&size=${size}&page=${page}&sort=${sort}&lastInputValue=${value}`;
    } else {
      query =
        value === null
          ? `?lastArticleId=${id}&size=${size}&page=${page}&sort=${sort}&isEnd=${isEnd}`
          : `?lastArticleId=${id}&size=${size}&page=${page}&sort=${sort}&isEnd=${isEnd}&lastInputValue=${value}`;
    }

    return { method: 'POST', uri: '/boards' + query };
  },
  {
    parse: typeOfferArray,
  },
);

const recent = createRequester(
  { method: 'GET', uri: '/boards/new' },
  {
    parse: typeOfferArray,
  },
);

const popular = createRequester(
  { method: 'GET', uri: '/boards/popular' },
  {
    parse: typeOfferArray,
  },
);

const get = createRequester((id) => ({ method: 'GET', uri: '/boards/' + id }), {
  parse: OfferContent,
});

const searchByTag = createRequester(
  (ids) => ({
    method: 'GET',
    uri: `/boards/search?searchTagId=${encodeURIComponent(ids.join(','))}`,
  }),
  {
    parse: typeOfferArrayNoDup,
  },
);

const searchByTitle = createRequester(
  (title) => ({
    method: 'GET',
    uri: `/boards/search?title=${encodeURIComponent(title)}`,
  }),
  {
    parse: typeOfferArrayNoDup,
  },
);

export function typeOfferArray(values) {
  return values.map(Offer);
}

function typeOfferArrayNoDup(values) {
  /** @type {Offer[]} */
  const offers = values.map(Offer);
  const idSet = new Set();
  return offers.reduce((acc, item) => {
    if (!idSet.has(item.id)) {
      acc.push(item);
      idSet.add(item.id);
    }
    return acc;
  }, []);
}

const offers = Object.assign(list, {
  recent,
  popular,
  get,
  searchByTag,
  searchByTitle,
});

export default offers;
