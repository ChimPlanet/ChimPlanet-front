import { OfferListRequestPayload } from '@services/backend/offers';
import { Banner, Offer, OfferContent } from '@services/entity';

export type ActionPayloadArgument<Type, Data = void> = Data extends void
  ? { type: Type }
  : { type: Type; data: Data };

export interface Actions {
  //namespace: [payload,  Return type]
  banners: [void, Banner[]];
  offers: [
    (
      | ActionPayloadArgument<'list', OfferListRequestPayload>
      | ActionPayloadArgument<'popular'>
      | ActionPayloadArgument<'recent'>
      | ActionPayloadArgument<'official'>
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
