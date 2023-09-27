import { useQuery } from 'react-query';

import backend from '@services/backend';

/**
 * ! 반드시 FetchFunction은 JobOffer Array를 반환해야 한다.
 * @returns {import('react-query').UseQueryResult<Offer[]>}
 */
export function useJobOfferFromDynamic(key, fetchFunction, maxLength) {
  return useQuery(['offers'.jobOffer, key], fetchFunction, {
    select(offers) {
      return maxLength ? offers.slice(0, maxLength) : offers;
    },
  });
}

export function useJobOfferBasic(lastArticleId, size, page, sort, isEnd, value) {
  return useQuery(['offers'.jobOffer, 'basic', page, sort, isEnd], () =>
    backend.offers.list({ lastArticleId, size, page, sort, isEnd, value }),
  );
}
