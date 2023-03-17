import OfferClient from './offer-client';
import BannerClient from './banner-client';

const backend = Object.freeze({
  offers: new OfferClient(),
  banners: new BannerClient(),
});

export default backend;
