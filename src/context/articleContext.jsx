import { Offer } from '@/service/offer';
import { createContext, useState, useContext, useMemo } from 'react';

/** @type {React.Context<[Offer, {close():void, open(offer: Offer):void}]>} */
const articleContext = createContext();

export function ArticleProvider({ children }) {
  const [article, setArticle] = useState(null);

  const handle = useMemo(
    () => ({
      close: () => setArticle(null),
      open: (article) => setArticle(article),
    }),
    [setArticle],
  );

  return (
    <articleContext.Provider children={children} value={[article, handle]} />
  );
}

export function useArticleContext() {
  return useContext(articleContext);
}
