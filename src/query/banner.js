import fetchBanner from '@/service/banner/fetchBanner';
import fetchSubBanner from '@/service/banner/fetchSubBanner';
import { BannerQueryKey } from '@/constants/query';
import { useQuery } from 'react-query';
import { SubBannerQueryKey } from '../constants/query';

function preloadImages(data) {
  data.forEach((item) => {
    if (item.image) {
      new Image().src = item.imageUrl;
    }
  });
  return data;
}

export const useBanner = () => {
  return useQuery(BannerQueryKey, fetchBanner, {
    select: preloadImages,
  });
};

export const useSubBanner = () => {
  return useQuery(SubBannerQueryKey, fetchSubBanner);
};
