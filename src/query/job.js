import { useQuery } from 'react-query';
import { JobOfferQueryKey } from '@/constants/query';
import fetchJobOffer from '@/api/job/fetchJobOffer';
import JobUtils from '@/utils/job';
import { useCallback } from 'react';

const transformResponse = (data) => data.map(JobUtils.__transform);

export const usePopularJobOffer = () => {
  return useQuery([JobOfferQueryKey], fetchJobOffer, {
    select: transformResponse,
  });
};

export const useJobOfferByArrayId = (ids) => {
  return useQuery([JobOfferQueryKey], fetchJobOffer, {
    select: useCallback(
      (data) => {
        return transformResponse(data).filter((el) => ids.includes(el.boardId));
      },
      [ids],
    ),
  });
};
