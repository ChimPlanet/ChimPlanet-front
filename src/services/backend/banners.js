import { parseBannerFromResponse } from '@services/entity/banner';
import { createRequester } from './base';

const list = createRequester(
  { method: 'GET', uri: '/file/banner' },
  {
    parse: (d) => d.map(parseBannerFromResponse),
  },
);

const banners = Object.assign(list, {});

export default banners;
