import { OfferListRequestPayload } from '@services/backend/offers';
import { Banner, Offer, OfferContent } from '@services/entity';

export type ActionPayloadObj<T, P = void> = P extends void ? { type: T } : { type: T; data: P };

export interface Actions {
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

export type ActionPayload<T extends keyof Actions> = Actions[T][0];
export type ActionReturn<T extends keyof Actions> = Actions[T][1];

export type ActionFetchers = {
  [key in keyof Actions]: (payload: ActionPayload<key>) => Promise<ActionReturn<key>>;
};
