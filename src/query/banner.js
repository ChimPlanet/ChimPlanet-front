import { BannerQueryKey } from '@/constants/query';
import { useQuery } from 'react-query';
import { SubBannerQueryKey } from '../constants/query';
import backend from '@/service/backend';

function preloadImages(data) {
  if (Array.isArray(data)) {
    data.forEach((item) => {
      if (item.image) {
        new Image().src = item.imageUrl;
      }
    });
  }
  return data;
}

export const useBanner = () => {
  return useQuery(BannerQueryKey, backend.banners.mainBanner, {
    select: preloadImages,
  });
};

export const useSubBanner = () => {
  return useQuery(SubBannerQueryKey, backend.banners.subBanner);
};
