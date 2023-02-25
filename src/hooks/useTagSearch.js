import TagTrie from '@/utils/tagTrie';
import { useCallback, useState } from 'react';

function validateTag(tag) {
  return TagTrie.ready() && TagTrie.getInstance().hasTag(tag);
}

export default function useTagSearch() {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);

  const addTag = useCallback(
    (tag, clear = false) => {
      if (!validateTag(tag)) return;

      // 만약 동일한 태그가 없는 경우 추가
      if (!tags.includes(tag)) setTags([...tags, tag]);
      // 만약 입력한 태그가 input과 같다면 input을 초기화
      if (tag === input || clear) setInput('');
    },
    [setTags, input],
  );
  const removeTag = useCallback(
    (tag) => {
      setTags((prev) => prev.filter((t) => t !== tag));
    },
    [setTags],
  );

  const search = useCallback(() => {}, []);

  return {
    addTag,
    removeTag,
    search,
    setInput,
    input,
    tags,
  };
}
