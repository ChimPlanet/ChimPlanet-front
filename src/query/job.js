import { useQuery } from 'react-query';
import { JobOfferQueryKey } from '@/constants/query';
import fetchJobOffer from '@/api/job/fetchJobOffer';
import JobUtils from '@/utils/job';

const transformResponse = (data) => data.map(JobUtils.__transform);

export const usePopularJobOffer = () => {
  return useQuery([JobOfferQueryKey], fetchJobOffer, {
    select: transformResponse,
  });
};
