import OfferClient from './offer-client';
import BannerClient from './banner-client';
import TagClient from './tag-client';
import BoardClient from './board-client';

const backend = Object.freeze({
  offers: new OfferClient(),
  banners: new BannerClient(),
  tags: new TagClient(),
  board: new BoardClient(),
});

export default backend;
