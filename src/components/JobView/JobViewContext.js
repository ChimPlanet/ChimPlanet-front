import { createContext, useContext, useEffect, useReducer } from 'react';

/**
 * @typedef {object} JobViewContextValue
 * @property {import('../Search/SearchResult').SearchMetadata} searchMetadata
 * @property {"all"|"end"|"ongoing"} condition
 * @property {"popular" | "recent" | "recommend"} orderBy
 * @property {any[]} originalData
 * @property {any[]} displayedData
 *
 * @typedef {[context: JobViewContextValue, dispatch:(newValue: Partial<JobViewContextValue>)=>void]} JobViewContextState
 */

/** @type {React.Context<JobViewContextState>} */
const JobViewContext = createContext();

/**
 * @param {*} metadata
 */
export const useJobViewReducer = (metadata) => {
  /** @type {JobViewContextState} */
  const state = useReducer((state, newState) => ({ ...state, ...newState }), {
    searchMetadata: metadata,
    condition: 'all',
    orderBy: 'recent',
    originalData: [],
    displayedData: [],
  });

  useEffect(() => {
    state[1]({ searchMetadata: metadata });
  }, [metadata]);

  return state;
};

export const JobViewContextProvider = JobViewContext.Provider;

export const useJobViewContext = () => useContext(JobViewContext);
