import { useJobOfferDetail } from '@query/offer';
import { createContext, useContext, useMemo } from 'react';

/** @type {React.Context<{data: OfferContent, isError: boolean}>} */
const ArticleContext = createContext();

export const ArticleProvider = ({ children, id }) => {
  const { data } = useJobOfferDetail(id);

  return (
    <ArticleContext.Provider value={useMemo(() => data, [data])}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => useContext(ArticleContext);
