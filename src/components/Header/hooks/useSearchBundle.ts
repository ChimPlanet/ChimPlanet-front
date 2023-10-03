import { useState } from 'react';

import useTag from '@hooks/useTag';
import { removePrefix } from '@utils/str';
import { SearchStrategy, TagSearchStrategy, TextSearchStrategy } from '../types/strategy';

interface SearchBundle {
  tags: string[];
  text: string;
}

export default function useSearchBundle() {
  const { trie } = useTag();
  const [bundle, setBundle] = useState<SearchBundle>({ tags: [], text: '' });

  const updateText = (text: string) => {
    setBundle((prev) => ({ ...prev, text }));
  };

  const tags = {
    add: (value: string, clearText = false) => {
      const target = removePrefix(value);

      if (!validate(bundle, target) || !trie.has(target)) return;

      setBundle((p) => ({
        tags: [...p.tags, target],
        text: clearText ? '' : p.text,
      }));
    },
    remove: (target: string) => {
      setBundle((prev) => ({ ...prev, tags: prev.tags.filter((t) => t !== target) }));
    },
  };

  const getStrategy = () => createStrategy(bundle);

  return {
    bundle,
    tags,
    updateText,
    getStrategy,
  };
}

export const getCurrentStrategy = ({ tags, text }: SearchBundle) =>
  tags.length === 0 && // 선 입력된 태그가 없고
  (text.length === 0 || text.at(0) !== '#')
    ? TextSearchStrategy
    : TagSearchStrategy;

const createStrategy = (bundle: SearchBundle): SearchStrategy => {
  switch (getCurrentStrategy(bundle)) {
    case TextSearchStrategy:
      return new TextSearchStrategy(bundle.text);
    case TagSearchStrategy:
      return new TagSearchStrategy(bundle.tags, bundle.text.length > 0);
    default:
      throw new Error('Invalid Search Strategy');
  }
};

const validate = ({ tags }: SearchBundle, lowered: string) =>
  // 이미 동일한 태그가 없는 경우
  tags.findIndex((t) => t.toLocaleLowerCase() === lowered) === -1;
