import { useQuery } from 'react-query';

import { BannerQueryKey } from '@/constants/query';
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

/** @returns {import('react-query').UseQueryResult<Banner[]>} */
export const useBanner = () => {
  return useQuery(BannerQueryKey, backend.banners.banners, {
    select: preloadImages,
  });
};
