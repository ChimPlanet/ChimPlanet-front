import { useQuery } from 'react-query';
import { JobOfferQueryKey } from '@/constants/query';
import fetchJobOffer from '@/api/job/fetchJobOffer';

import { useCallback } from 'react';
import fetchJobOfferDetail from '@/api/job/fetchJobOfferDetail';
import Offer from '@/api/domain/Offer';

const transformResponse = (data) => data.map(Offer);

export const usePopularJobOffer = () => {
  return useQuery([JobOfferQueryKey, 'popular'], fetchJobOffer, {
    select: transformResponse,
  });
};

/**
 * ! 반드시 FetchFunction은 JobOffer Array를 반환해야 한다.
 */
export function useJobOfferFromDynamic(key, fetchFunction) {
  return useQuery([JobOfferQueryKey, key], fetchFunction, {
    select: transformResponse,
  });
}

export const useJobOfferByArrayId = (ids) => {
  return useQuery([JobOfferQueryKey], fetchJobOffer, {
    select: useCallback(
      (data) => {
        return transformResponse(data).filter((el) => ids.includes(el.id));
      },
      [ids],
    ),
  });
};

export const useJobOfferDetail = (id) => {
  return useQuery([JobOfferQueryKey, 'detail', id], fetchJobOfferDetail);
};
