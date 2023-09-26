import { Tag } from '@services/entity';
import { getLocalStorageValue } from '@utils/storage';
import TagTrie from '@utils/tagTrie';
import { useMemo } from 'react';

const useTag = () => {
  const tags = getLocalStorageValue<Tag[]>('tags') ?? [];

  return useMemo(
    () => ({
      items: tags,
      trie: new TagTrie(tags.map((v) => v.name)),
    }),
    [tags?.length],
  );
};

export default useTag;
