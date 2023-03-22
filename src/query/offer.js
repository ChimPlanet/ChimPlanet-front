import { useQuery } from 'react-query';

import { Offer, OfferContent } from '@/service/offer';
import { JobOfferQueryKey } from '@/constants/query';
import backend from '@/service/backend';

/**
 * @returns {import('react-query').UseQueryResult<Offer[]>}
 */
export const usePopularJobOffer = () => {
  return useQuery([JobOfferQueryKey, 'popular'], backend.offers.popular);
};

/**
 * ! 반드시 FetchFunction은 JobOffer Array를 반환해야 한다.
 * @returns {import('react-query').UseQueryResult<Offer[]>}
 */
export function useJobOfferFromDynamic(key, fetchFunction) {
  return useQuery([JobOfferQueryKey, key], fetchFunction);
}

export function useRecentOffers() {
  return useQuery([JobOfferQueryKey, 'recent'], backend.offers.recent);
}

/** @returns {import('react-query').UseQueryResult<Offer>} */
export const useJobOfferByArrayId = (ids) => {
  return useQuery([JobOfferQueryKey], () => backend.offers.byMultipleId(ids));
};

/** @returns {import('react-query').UseQueryResult<OfferContent>} */
export const useJobOfferDetail = (id) => {
  return useQuery([JobOfferQueryKey, 'detail', id], () =>
    backend.offers.content(id),
  );
};

// 추후 api변경되면 수정 예정
export function useRecentOffers(key, fetchFunction) {
  return useQuery([JobOfferQueryKey, key], fetchFunction, {
    select: transformResponse,
  });
};