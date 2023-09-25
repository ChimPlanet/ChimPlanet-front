import { BannerDAO, parseBannerFromResponse } from '@services/entity/banner';
import { createAPI } from './base';

const banners = Object.freeze({
  list: createAPI(
    { method: 'GET', uri: '/file/banner' },
    {
      parse: (d: BannerDAO[]) => d.map(parseBannerFromResponse),
    },
  ),
});

export default banners;
