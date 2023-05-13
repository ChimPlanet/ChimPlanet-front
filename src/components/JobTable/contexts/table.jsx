import { createContext, useContext, useReducer } from 'react';

/**
 * @typedef {object} JobViewContextValue
 * @property {"all"|"end"|"ongoing"} condition
 * @property {"popular" | "recent" | "recommend"} orderBy
 * @property {import('@/utils/job').JobOfferVO[]} originalData
 * @property {import('@/utils/job').JobOfferVO[]} displayedData
 * @property {JSX.Element} componentResultNotFound
 * @property {"loading" | "done"} pending
 *
 * @typedef {[context: JobViewContextValue, dispatch:(newValue: Partial<JobViewContextValue>)=>void]} JobViewContextState
 */

/** @type {React.Context<JobViewContextState>} */
const tableContext = createContext();

/** @type {JobViewContextValue} */
const defaultTableState = Object.freeze({
  condition: 'all',
  orderBy: 'recent',
  originalData: [],
  displayedData: [],
  pending: 'loading',
  componentResultNotFound: <h1>결과가 없습니다.</h1>,
});

/**
 * @param {Partial<JobViewContextValue>} initial
 * @returns {JobViewContextState}
 */
export const useJobTableReducer = (initial) =>
  useReducer(reducer, { ...defaultTableState, ...initial });
export const useJobTableContext = () => useContext(tableContext);
export const wrapJobTableContext = (Component) => (componentProps) =>
  (
    <tableContext.Provider value={useJobTableReducer()}>
      <Component {...componentProps} />
    </tableContext.Provider>
  );

const reducer = (state, newState) => preprocess({ ...state, ...newState });

/**
 * @param {JobViewContextValue} state
 * @returns {JobViewContextValue}
 */
function preprocess(state) {
  // filter displayed values using context
  state.displayedData = sortOffers(
    state.orderBy,
    filterOffers(state.condition, state.originalData),
  );
  return state;
}

/**
 * 정렬
 * @param {JobViewContextValue['orderBy']} type
 * @param {import('@/utils/job').JobOfferVO[]} offers
 */
function sortOffers(type, offers) {
  switch (type) {
    case 'popular':
      return offers.sort((lhs, rhs) => rhs.viewCount - lhs.viewCount);
    case 'recent':
      return offers.sort(
        (lhs, rhs) => rhs.regDateTime.valueOf() - lhs.regDateTime.valueOf(),
      );
    case 'recommend':
      return offers.sort((lhs, rhs) => rhs.likeCount - lhs.likeCount);
    default:
      return offers;
  }
}

/**
 * 필터링
 * @param {JobViewContextValue['condition']} type
 * @param {import('@/utils/job').JobOfferVO[]} offers
 */
function filterOffers(type, offers) {
  //"all"|"end"|"ongoing"
  switch (type) {
    case 'end':
      return offers.filter((el) => el.isClosed);
    case 'ongoing':
      return offers.filter((el) => !el.isClosed);
    default:
      return offers;
  }
}
