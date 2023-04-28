import { createContext, useState, useContext, useEffect } from 'react';

import backend from '@/service/backend';
import TagTrie from '@/utils/tagTrie';

const preloadContext = createContext();

export function PreloadProvider({ children }) {
  const [preloads, setPreload] = useState({});
  // NeedPreloadRequests & only work when page initialize
  useEffect(() => {
    Promise.all(NeedPreloadRequests.map((el) => el.value())).then(
      (responses) => {
        const _preload = {};
        responses.forEach((data, i) => {
          const { key, preprocess } = NeedPreloadRequests[i];
          _preload[key] = preprocess(data);
        });

        setPreload(_preload);
      },
    );
  }, []);

  return <preloadContext.Provider children={children} value={preloads} />;
}

export function usePreloadContext() {
  return useContext(preloadContext);
}

const NeedPreloadRequests = [
  {
    key: 'banners',
    value: backend.banners.banners,
    preprocess: (collection) => {
      if (Array.isArray(collection)) {
        collection.forEach((item) => {
          if (item.yn) new Image().src = item.sourceUrl;
        });
      }
      return collection;
    },
  },
  {
    key: 'tags',
    value: backend.tags.tagList,
    preprocess: (collection) => {
      TagTrie.getInstance(collection.map((e) => e.tagName));
      return collection;
    },
  },
];
