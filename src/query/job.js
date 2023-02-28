import { useQuery } from 'react-query';
import { JobOfferQueryKey } from '@/constants/query';
import fetchJobOffer from '@/api/job/fetchJobOffer';

export const usePopularJobOffer = () => {
  return useQuery([JobOfferQueryKey], fetchJobOffer);
};
