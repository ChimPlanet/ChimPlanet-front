import { useTagList } from '@/query/tag';
import { useLayoutEffect } from 'react';
import TagTrie from '@/utils/tagTrie';

export default function useTagRecommendEngine() {
  const { data: tags } = useTagList();

  useLayoutEffect(() => {
    if (Array.isArray(tags)) {
      TagTrie.getInstance(tags);
    }
  }, [tags]);
}
