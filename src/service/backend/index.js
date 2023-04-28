import OfferClient from './offer-client';
import BannerClient from './banner-client';
import TagClient from './tag-client';

const backend = Object.freeze({
  offers: new OfferClient(),
  banners: new BannerClient(),
  tags: new TagClient(),
});

export default backend;
