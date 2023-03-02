import { useTagList } from '@/query/tag';
import { useLayoutEffect } from 'react';
import TagTrie from '@/utils/tagTrie';

export default function useTagTrie() {
  const { data: tags } = useTagList();

  useLayoutEffect(() => {
    TagTrie.getInstance(tags);
  }, [tags]);
}
