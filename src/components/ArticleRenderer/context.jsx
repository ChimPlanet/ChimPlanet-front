import { useJobOfferDetail } from '@query/offer';
import { OfferContent } from '@services/offer';
import { createContext, useContext, useMemo } from 'react';

/** @type {React.Context<{data: OfferContent, isError: boolean}>} */
const ArticleContext = createContext();

export const ArticleProvider = ({ children, id }) => {
  const { data, isError } = useJobOfferDetail(id);
  return (
    <ArticleContext.Provider
      value={useMemo(() => ({ data, isError }), [data, isError])}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => useContext(ArticleContext);
