import backend from '@services/backend';
import { ActionFetchers } from './action';

const fetchers: ActionFetchers = {
  banners: backend.banners.list,
  offers: (action) => {
    switch (action.type) {
      case 'list':
        if (!action.data) throw new Error('Missing data for fetching offers');
        return backend.offers.list(action.data);
      case 'popular':
        return backend.offers.popular();
      case 'recent':
        return backend.offers.recent();
      case 'official':
        // TODO: Add official offers
        return backend.offers.popular();
    }
  },
  offer: (id) => backend.offers.get(id),
};

export default fetchers;
