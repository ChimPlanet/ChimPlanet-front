import { useCallback, useState } from 'react';

export default function useTagSearch() {
  const [input, setInput] = useState('');
  const [tags, setTags] = useState([]);

  const addTag = useCallback(
    (tag) => {
      setTags([...tags, tag]);
      // 만약 입력한 태그가 input과 같다면 input을 초기화
      if (tag === input) setInput('');
    },
    [setTags],
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
