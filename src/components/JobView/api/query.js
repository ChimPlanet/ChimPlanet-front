import { useQuery } from 'react-query';
import { fetchOffersByTags } from './model';
import JobUtils from '@/utils/job';

const transformResponse = (data) => data.map(JobUtils.__transform);

export const useJobViewOffers = () => {
  return useQuery(['jobViewOffers'], fetchOffersByTags, {
    select: transformResponse,
  });
};
