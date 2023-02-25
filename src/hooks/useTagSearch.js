import TagTrie from '@/utils/tagTrie';
import { useCallback, useState } from 'react';

function validateTag(tag) {
  return TagTrie.ready() && TagTrie.getInstance().hasTag(tag);
}

export default function useTagSearch() {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);

  const addTag = useCallback(
    (tag) => {
      if (!validateTag(tag)) return;
      setTags([...tags, tag]);
      // 만약 입력한 태그가 input과 같다면 input을 초기화
      if (tag === input) setInput('');
    },
    [setTags, input],
  );
  const removeTag = useCallback(
    (tag) => {
      setTags(tags.filter((t) => t !== tag));
    },
    [setTags],
  );

  return {
    addTag,
    removeTag,
    setInput,
    input,
    tags,
  };
}
