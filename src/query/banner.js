import fetchBanner from '@/api/banner/fetchBanner';
import fetchSubBanner from '@/api/banner/fetchSubBanner';
import { BannerQueryKey } from '@/constants/query';
import { useQuery } from 'react-query';
import { SubBannerQueryKey } from '../constants/query';

export const useBanner = () => {
  return useQuery(BannerQueryKey, fetchBanner);
};

export const useSubBanner = () => {
  return useQuery(SubBannerQueryKey, fetchSubBanner);
};
