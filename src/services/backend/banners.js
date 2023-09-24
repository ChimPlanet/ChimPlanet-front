import { parseBannerFromResponse } from '@services/entity/banner';
import { createAPI } from './base';

const list = createAPI(
  { method: 'GET', uri: '/file/banner' },
  {
    parse: (d) => d.map(parseBannerFromResponse),
  },
);

const banners = Object.assign(list, {});

export default banners;
