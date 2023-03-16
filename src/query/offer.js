import { useQuery } from 'react-query';
import { useCallback } from 'react';

import { Offer, OfferContent } from '@/service/offer';
import { JobOfferQueryKey } from '@/constants/query';
import { fetchOffers, fetchOfferContent } from '@/service/offer/offer.api';

const transformResponse = (data) => data.map(Offer);

/**
 * @returns {import('react-query').UseQueryResult<Offer[]>}
 */
export const usePopularJobOffer = () => {
  return useQuery([JobOfferQueryKey, 'popular'], fetchOffers, {
    select: transformResponse,
  });
};

/**
 * ! 반드시 FetchFunction은 JobOffer Array를 반환해야 한다.
 * @returns {import('react-query').UseQueryResult<Offer[]>}
 */
export function useJobOfferFromDynamic(key, fetchFunction) {
  return useQuery([JobOfferQueryKey, key], fetchFunction, {
    select: transformResponse,
  });
}
/** @returns {import('react-query').UseQueryResult<Offer>} */
export const useJobOfferByArrayId = (ids) => {
  return useQuery([JobOfferQueryKey], fetchOffers, {
    select: useCallback(
      (data) => {
        return transformResponse(data).filter((el) => ids.includes(el.id));
      },
      [ids],
    ),
  });
};

/** @returns {import('react-query').UseQueryResult<OfferContent>} */
export const useJobOfferDetail = (id) => {
  return useQuery(
    [JobOfferQueryKey, 'detail', id],
    () => fetchOfferContent(id),
    {
      select: OfferContent,
    },
  );
};
