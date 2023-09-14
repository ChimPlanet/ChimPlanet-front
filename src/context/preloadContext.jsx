import { createContext, useContext, useEffect, useState } from 'react';

import { Paths } from '@routes';
import backend from '@services/backend';
import TagTrie from '@utils/tagTrie';

const preloadContext = createContext();

const IGNORE_PATHS = [Paths.Error, Paths.NotFound];

export function PreloadProvider({ children }) {
  const [preloads, setPreload] = useState({});
  // NeedPreloadRequests & only work when page initialize
  useEffect(() => {
    // ! ERROR 의 경우에는 Preload를 하지 않음
    if (IGNORE_PATHS.indexOf(window.location.pathname) > -1) {
      return;
    }

    Promise.all(NeedPreloadRequests.map((el) => el.value()))
      .then((responses) => {
        const _preload = {};
        responses.forEach((data, i) => {
          const { key, preprocess } = NeedPreloadRequests[i];
          _preload[key] = preprocess(data);
        });

        setPreload(_preload);
      })
      .catch(() => {
        window.location.href = Paths.Error;
      });
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
