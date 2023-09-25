import { useQuery } from 'react-query';

import backend from '@services/backend';
import { QueryKeys } from './keys';

export const usePopularJobOffer = () => {
  return useQuery([QueryKeys.jobOffer, 'popular'], backend.offers.popular);
};

/**
 * ! 반드시 FetchFunction은 JobOffer Array를 반환해야 한다.
 * @returns {import('react-query').UseQueryResult<Offer[]>}
 */
export function useJobOfferFromDynamic(key, fetchFunction, maxLength) {
  return useQuery([QueryKeys.jobOffer, key], fetchFunction, {
    select(offers) {
      return maxLength ? offers.slice(0, maxLength) : offers;
    },
  });
}

export function useJobOfferBasic(lastArticleId, size, page, sort, isEnd, value) {
  return useQuery([QueryKeys.jobOffer, 'basic', page, sort, isEnd], () =>
    backend.offers.list({ lastArticleId, size, page, sort, isEnd, value }),
  );
}

export function useRecentOffers() {
  return useQuery([QueryKeys.jobOffer, 'recent'], backend.offers.recent);
}

/** @returns {import('react-query').UseQueryResult<OfferContent>} */
export const useJobOfferDetail = (id) => {
  return useQuery([QueryKeys.jobOffer, id], () => backend.offers.get(id), {
    useErrorBoundary: true,
  });
};
