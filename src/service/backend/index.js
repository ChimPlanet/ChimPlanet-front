import OfferClient from './offer-client';
import BannerClient from './banner-client';
import TagClient from './tag-client';
import OfficialClient from './official-client';

const backend = Object.freeze({
  offers: new OfferClient(),
  banners: new BannerClient(),
  tags: new TagClient(),
  official: new OfficialClient(),
});

export default backend;
