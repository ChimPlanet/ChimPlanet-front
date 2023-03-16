import Offer from '@/api/domain/Offer';
import { useQuery } from 'react-query';
import { fetchOffersByTags } from './model';

const transformResponse = (data) => data.map(Offer);

export const useJobViewOffers = () => {
  return useQuery(['jobViewOffers'], fetchOffersByTags, {
    select: transformResponse,
  });
};
