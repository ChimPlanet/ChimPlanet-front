import { useQuery } from '@hooks/useQuery';
import { OfferContent } from '@services/entity';
import { createContext, useContext } from 'react';

const ArticleContext = createContext<OfferContent | undefined>(undefined);

interface Props {
  children?: React.ReactNode;
  id: string;
}

export const ArticleProvider = ({ children, id }: Props) => {
  const { data } = useQuery('offer', id);
  return <ArticleContext.Provider value={data}>{children}</ArticleContext.Provider>;
};

export const useArticleContext = () => {
  const context = useContext(ArticleContext);
  if (!context) throw new Error('ArticleContext is not provided');
  return context;
};
