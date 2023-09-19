import { Banner } from '@services/banner';
import { groupBy } from '@utils';
import { pairBannerFromGroup } from '../banner/banner-utils';
import { createRequester } from './base';

const list = createRequester(
  { method: 'GET', uri: '/file/banner' },
  {
    parse: typeBannerCollection,
  },
);

const banners = Object.assign(list, {});

function typeBannerCollection(collection) {
  const banners = collection.map(Banner);

  return pairBannerFromGroup(groupBy(banners, 'redirectUrl'));
}

export default banners;
