import { createContext, useContext } from 'react';
import useSearch from '../hooks/useSearchReducer';

/** @type {React.Context<import('../hooks/useSearchReducer').SearchReducerResult>} */
const searchContext = createContext();

export const useSearchContext = () => useContext(searchContext);

export const SearchContextProvider = ({ children, onAfterSearch }) => {
  const stateAndDispatcher = useSearch(onAfterSearch);

  return (
    <searchContext.Provider value={stateAndDispatcher}>
      {children}
    </searchContext.Provider>
  );
};
