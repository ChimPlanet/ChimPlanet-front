import backend from '@services/backend';
import { OfferListRequestPayload } from '@services/backend/offers';
import { Banner, Offer, OfferContent } from '@services/entity';
import { useQuery as useReactQuery } from 'react-query';

type ActionPayloadObj<T, P = void> = {
  type: T;
  payload: P;
};

interface Actions {
  //key: [payload, return type]
  banners: [void, Banner[]];
  offers: [
    (
      | ActionPayloadObj<'list', OfferListRequestPayload>
      | ActionPayloadObj<'popular'>
      | ActionPayloadObj<'recent'>
    ),
    Offer[],
  ];
  offer: [string, OfferContent];
}

type ActionPayload<T extends keyof Actions> = Actions[T][0];
type ActionReturn<T extends keyof Actions> = Actions[T][1];

type ActionFetchers = {
  [key in keyof Actions]: (payload: ActionPayload<key>) => Promise<ActionReturn<key>>;
};

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

const calculateQueryKey = (key: any, payload: any) => {
  const queryKey = [key];
  if (payload) queryKey.push(payload);
  return queryKey;
};

export const useQuery = <T extends keyof Actions>(action: T, payload?: ActionPayload<T>) => {
  const queryKey = calculateQueryKey(action, payload);

  return useReactQuery(queryKey, () => fetchers[action](payload));
};
