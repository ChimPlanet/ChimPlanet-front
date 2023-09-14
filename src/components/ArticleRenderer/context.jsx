import { Offer } from '@services/offer';
import { createContext, useContext } from 'react';

/** @type {React.Context<[Offer, {close():void, open(offer: Offer):void}]>} */
const ArticleContext = createContext();

export function ArticleProvider({ article, children }) {
  return <ArticleContext.Provider children={children} value={article} />;
}

export function useArticleContext() {
  return useContext(ArticleContext);
}
