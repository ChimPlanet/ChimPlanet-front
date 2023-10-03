import { createContext, useContext } from 'react';
import useSearchBundle from '../hooks/useSearchBundle';

const searchContext = createContext<ReturnType<typeof useSearchBundle> | null>(null);

export const SearchContextProvider = ({ children, onAfterSearch }) => {
  const o = useSearchBundle();

  return <searchContext.Provider value={o}>{children}</searchContext.Provider>;
};

export const useSearch = () => {
  const context = useContext(searchContext);
  if (!context) {
    throw new Error('SearchContextProvider를 찾을 수 없습니다.');
  }
  return context;
};
