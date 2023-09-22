import { useMemo, useReducer } from 'react';

import useTag from '@hooks/useTag';
import { HistoryContext } from '@utils/Context/historyContext';
import { removePrefix } from '@utils/str';
import useSearchNavigate from './useSearchNavigate';

/**
 * @typedef {object} SearchState
 * @property {"tag" | "normal"} searchType
 * @property {string} input
 * @property {string[]} current
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
export default function useSearch(onAfterSearch) {
  const navigate = useSearchNavigate();

  const { trie } = useTag();

  /** @type {[SearchState, (newState: Partial<SearchState>)=>void]} */
  const [state, dispatch] = useReducer(reducer, {
    searchType: 'normal',
    input: '',
    current: [],
  });

  /** @type {SearchHandle} */
  const handle = useMemo(
    () => ({
      removeTag: (id) =>
        dispatch({ current: state.current.filter((t) => t !== id) }),
      addTag: (word, clear = false) => {
        if (state.searchType !== 'tag') return;

        const lowered = removePrefix(word).toLowerCase();

        if (!validate(state.current, lowered) || !trie.has(lowered)) return;
        dispatch({
          current: [...state.current, trie.get(removePrefix(word))],
        });
        // 만약 입력한 태그가 input과 같다면 input을 초기화
        if (word === state.input || clear) dispatch({ input: '' });
      },
      setInput: (newValue) => dispatch({ input: newValue }),
      search: () => {
        HistoryContext.getInstance().addFront(
          state.searchType === 'normal'
            ? [state.input]
            : state.current.map((t) => `#${t}`),
        );

        navigate(
          state.searchType === 'normal' ? state.input : state.current,
          state.searchType,
        );
        onAfterSearch();
      },
    }),
    [state, dispatch, onAfterSearch, navigate, trie],
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
    state.current.length === 0 && // 선 입력된 태그가 없고
    (state.input.length === 0 || state.input.at(0) !== '#') // 첫 문자가 태그 prefix가 아닌 경우
      ? 'normal'
      : 'tag';

  return state;
};

/**
 * @param {string[]} current
 * @param {string} target
 */
const validate = (current, lowered) =>
  // 이미 동일한 태그가 없는 경우
  current.findIndex((t) => t.toLocaleLowerCase() === lowered) === -1;
