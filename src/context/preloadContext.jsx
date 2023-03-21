import backend from '@/service/backend';
import { Offer } from '@/service/offer';
import { createContext, useState, useContext, useMemo, useEffect } from 'react';

/** @type {React.Context<[Offer, {close():void, open(offer: Offer):void}]>} */
const preloadContext = createContext();

export function PreloadProvider({ children }) {
  const [preloads, setPreload] = useState(null);

  // NeedPreloadRequests & only work when page initialize
  useEffect(() => {
    Promise.all(
      NeedPreloadRequests.map(el => el.value())
    ).then(responses => {
      console.log(responses)
      const _preload = {};

      responses.forEach((data, i) => {
        const {key, preprocess} = NeedPreloadRequests[i];
        _preload[key] = preprocess(data);
      })

      setPreload(_preload);
    })
  }, []);


  console.log(preloads)

  return (
    <preloadContext.Provider children={children} value={preloads} />
  );
}

export function usePreloadContext() {
  return useContext(preloadContext);
}

const NeedPreloadRequests = [
  {
    key: "mainBanner",
    value: backend.banners.mainBanner,
    preprocess: (collection) => {
      if(Array.isArray(collection)){
        collection.forEach(item => {
          new Image().src = item.sourceUrl;
        })
      }
      return collection;
    }
  },
  {
    key: "subBanner",
    value: backend.banners.subBanner,
    preprocess: el => el,
  }
];
