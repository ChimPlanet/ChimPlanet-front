import fetchBanner from '@/api/banner/fetchBanner';
import { BannerQueryKey } from '@/constants/query';
import { useQuery } from 'react-query';

export const useBanner = () => {
  return useQuery(BannerQueryKey, fetchBanner);
};
