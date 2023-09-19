import { useQuery } from 'react-query';

import backend from '@services/backend';
import { QueryKeys } from './keys';

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
  return useQuery(QueryKeys.banner, backend.banners, {
    select: preloadImages,
  });
};
