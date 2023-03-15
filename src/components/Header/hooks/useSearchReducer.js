import { useReducer, useMemo } from 'react';

import { ignorePrefix } from '@/utils/str';
import TagTrie from '@/utils/tagTrie';
import useSearchNavigate from './useSearchNavigate';
import { HistoryContext } from '@/utils/Context/historyContext';

/**
 * @typedef {object} SearchState
 * @property {"tag" | "normal"} searchType
 * @property {string} input
 * @property {string[]} tags
 *
 *
 * @typedef {object} SearchHandle
 * @property {(id: string)=>void} removeTag
 * @property {(tag: string, clear?: boolean)=>void} addTag
 * @property {(newInput)=>void} setInput
 * @property {()=>void} search
 *
 * @typedef {[SearchState, SearchHandle]} SearchReducerResult
 *
 * @param {()=>void} onAfterSearch
 * @returns {SearchReducerResult}
 */
export default function useSearchReducer(onAfterSearch) {
  const navigate = useSearchNavigate();
  /** @type {[SearchState, (newState: Partial<SearchState>)=>void]} */
  const [state, dispatch] = useReducer(reducer, {
    searchType: 'normal',
    input: '',
    tags: [],
  });

  /** @type {SearchHandle} */
  const handle = useMemo(
    () => ({
      removeTag: (id) => dispatch({ tags: state.tags.filter((t) => t !== id) }),
      addTag: (tag, clear = false) => {
        if (!validateTag(state, tag)) return;
        dispatch({ tags: [...state.tags, getOriginalTag(tag)] });
        // 만약 입력한 태그가 input과 같다면 input을 초기화
        if (tag === state.input || clear) dispatch({ input: '' });
      },
      setInput: (newValue) => dispatch({ input: newValue }),
      search: () => {
        HistoryContext.getInstance().addFront(
          state.searchType === 'normal'
            ? [state.input]
            : state.tags.map((t) => `#${t}`),
        );

        navigate(
          state.searchType === 'normal' ? state.input : state.tags,
          state.searchType,
        );
        onAfterSearch();
      },
    }),
    [state, dispatch, onAfterSearch, navigate],
  );

  return [state, handle];
}

const reducer = (state, newState) => preprocess({ ...state, ...newState });

/**
 * @param {SearchState} state
 * @return {SearchState}
 */
const preprocess = (state) => {
  // ! 검색 종류 조건
  state.searchType =
    state.tags.length === 0 && // 선 입력된 태그가 없고
    (state.input.length === 0 || state.input.at(0) !== '#') // 첫 문자가 태그 prefix가 아닌 경우
      ? 'normal'
      : 'tag';

  return state;
};

/**
 * @param {SearchState} state
 * @param {string} target
 */
const validateTag = (state, target) => {
  if (typeof target !== 'string' || target.at(0) !== '#') return false;

  const lowered = ignorePrefix(target).toLowerCase();

  return (
    // 이미 동일한 태그가 없는 경우
    state.tags.findIndex((t) => t.toLocaleLowerCase() === lowered) === -1 &&
    TagTrie.ready() &&
    TagTrie.getInstance().hasTag(lowered)
  );
};

const getOriginalTag = (rawTag) => {
  return TagTrie.getInstance().tagMap.get(
    TagTrie.disassembleWord(ignorePrefix(rawTag)),
  );
};
