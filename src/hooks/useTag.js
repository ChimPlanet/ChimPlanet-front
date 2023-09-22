import { getLocalStorageValue } from '@utils/localStorage';
import TagTrie from '@utils/tagTrie';
import { useMemo } from 'react';

/**
 * @typedef {import('@services/entity').Tag} Tag
 *
 * @function
 */
const useTag = () => {
  /** @type {Tag[]} */
  const tags = getLocalStorageValue('tags') ?? [];

  return useMemo(
    () => ({
      items: tags,
      trie: new TagTrie(tags.map((v) => v.name)),
    }),
    [tags?.length],
  );
};

export default useTag;
