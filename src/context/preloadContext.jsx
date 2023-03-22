import backend from '@/service/backend';
import { Offer } from '@/service/offer';
import { createContext, useState, useContext, useMemo, useEffect } from 'react';

/** @type {React.Context<[Offer, {close():void, open(offer: Offer):void}]>} */
const preloadContext = createContext();

export function PreloadProvider({ children }) {
  const [preloads, setPreload] = useState();

  // NeedPreloadRequests & only work when page initialize
  useEffect(() => {
    Promise.all(
      NeedPreloadRequests.map(el => el.value())
    ).then(responses => {
      const _preload = {};

      responses.forEach((data, i) => {
        const {key, preprocess} = NeedPreloadRequests[i];
        _preload[key] = preprocess(data);
      })

      setPreload(_preload);
    })
  }, []);



  return (
    <preloadContext.Provider children={children} value={preloads} />
  );
}

export function usePreloadContext() {
  return useContext(preloadContext);
}

const NeedPreloadRequests = [
///  {
///    key: "main-banner",
///    value: backend.banners.mainBanner
///  },
  {
    key: "sub-banner",
    value: backend.banners.subBanner,
    preprocess: (collection) => {
      if(Array.isArray(collection)){
        collection.forEach(item => {
          new Image().src = item.sourceUrl;
        })
      }
      return collection;
    }
  }
];
