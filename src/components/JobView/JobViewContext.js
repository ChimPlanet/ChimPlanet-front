import { usePreloadContext } from '@/context/preloadContext';
import backend from '@/service/backend';
import { Tag } from '@/service/tag';
import { createContext, useContext, useEffect, useReducer } from 'react';

/**
 * @typedef {object} JobViewContextValue
 * @property {import('../Search/SearchResult').SearchMetadata} searchMetadata
 * @property {"all"|"end"|"ongoing"} condition
 * @property {"popular" | "recent" | "recommend"} orderBy
 * @property {import('@/utils/job').JobOfferVO[]} originalData
 * @property {import('@/utils/job').JobOfferVO[]} displayedData
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
  const state = useReducer(reducer, {
    searchMetadata: metadata,
    condition: 'all',
    orderBy: 'recent',
    originalData: [],
    displayedData: [],
  });

  /** @type {{tags: Tag[]}} */
  const { tags } = usePreloadContext();

  useEffect(() => {
    state[1]({ searchMetadata: metadata });
    if (metadata.type === 'tag' && tags) {
      const querySet = new Set(metadata.words);
      /** @type {Tag[]} */
      const items = tags.reduce((acc, it) => {
        if (querySet.has(it.tagName)) {
          acc.push(it);
        }
        return acc;
      }, []);
      backend.offers
        .searchTags(items.map((e) => e.tagId))
        .then((offers) => state[1]({ originalData: offers }));
    } else if (metadata.type === 'normal') {
      backend.offers
        .searchTitle(metadata.words[0])
        .then((offers) => state[1]({ originalData: offers }));
    }
  }, [metadata, tags]);

  return state;
};

export const JobViewContextProvider = JobViewContext.Provider;

export const useJobViewContext = () => useContext(JobViewContext);

const reducer = (state, newState) => __preprocess({ ...state, ...newState });

/**
 * @param {JobViewContextValue} state
 * @returns
 */
function __preprocess(state) {
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
