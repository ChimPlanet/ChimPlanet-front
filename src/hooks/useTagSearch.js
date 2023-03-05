import TagTrie from '@/utils/tagTrie';
import { useCallback, useState } from 'react';
import { ignorePrefix } from '@/utils/str';
import { HistoryContext } from '@/utils/Context/historyContext';
import useSearch from './useSearch';

function validateTag(tag) {
  return TagTrie.ready() && TagTrie.getInstance().hasTag(tag);
}

function getOriginalTag(tag) {
  return TagTrie.getInstance().tagMap.get(TagTrie.disassembleWord(tag));
}

export default function useTagSearch() {
  const [input, setInput] = useState('');
  /** @type {[string[], Function]} */
  const [tags, setTags] = useState([]);

  const __search = useSearch();

  const addTag = useCallback(
    (tag, clear = false) => {
      if (!validateTag(tag)) return;

      // 만약 동일한 태그가 없는 경우 추가
      if (!tags.find((acc) => acc.toLowerCase() === tag.toLowerCase()))
        setTags([...tags, getOriginalTag(tag)]);
      // 만약 입력한 태그가 input과 같다면 input을 초기화
      if (tag === ignorePrefix(input) || clear) setInput('');
    },
    [setTags, input, tags],
  );
  const removeTag = useCallback(
    (tag) => {
      setTags((prev) => prev.filter((t) => t !== tag));
    },
    [setTags],
  );

  const search = useCallback(() => {
    HistoryContext.getInstance().addFront(tags.map((t) => `#${t}`));
    setTags([]);
    __search(tags);
  }, [tags, setTags, __search]);

  return {
    addTag,
    removeTag,
    search,
    setInput,
    setTags,
    input,
    tags,
  };
}
