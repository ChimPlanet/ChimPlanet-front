import useTag from '@hooks/useTag';
import { Tag } from '@services/entity';
import { useMemo } from 'react';

export const useTagCategory = () => {
  const { items } = useTag();
  return useMemo(() => {
    const category = getCategory(items);
    return {
      category,
      topLevels: Array.from(category.keys()),
    };
  }, [items]);
};

export default useTagCategory;

const getCategory = (tags: Tag[]) => {
  const topLevelTags = selectTopLevelTags(tags).reduce(
    (o, t) => {
      o[t.id] = t;
      return o;
    },
    {} as Record<string, Tag>,
  );

  const category = Object.values(topLevelTags).reduce((m, t) => {
    m.set(t, []);
    return m;
  }, new Map<Tag, Tag[]>());

  tags.forEach((t) => {
    if (category.has(t)) return;
    category.get(topLevelTags[t.parent])?.push(t);
  });

  return category;
};

const selectTopLevelTags = (tags: Tag[]) => tags.filter((tag) => tag.child === tag.parent);
