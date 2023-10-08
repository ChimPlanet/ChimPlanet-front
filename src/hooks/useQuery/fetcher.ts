import backend from '@services/backend';
import { ActionFetchers } from './action';

const fetchers: ActionFetchers = {
  banners: backend.banners.list,
  offers: ({ type, payload }) => {
    switch (type) {
      case 'list':
        return backend.offers.list(payload);
      case 'popular':
        return backend.offers.popular();
      case 'recent':
        return backend.offers.recent();
    }
  },
  offer: (id) => backend.offers.get(id),
};

export default fetchers;
