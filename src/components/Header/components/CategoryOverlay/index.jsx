import { styled } from '@chimplanet/ui';
import { useMemo, useState } from 'react';

import { getFamilyTree } from '@utils';

import { usePreloadContext } from '@context/preloadContext';
import ChildCategoryColumn from './childCategoryColumn';
import ParentCategoryColumn from './parentCategoryColumn';

/**
 * @param {{close():void}}
 * @returns
 */
export default function CategoryOverlay({ close }) {
  const [parent, setParent] = useState(null);

  const { tags } = usePreloadContext();

  const [ancestors, itemMap] = useMemo(() => {
    const familyTree = getFamilyTree(tags);

    const parents = Array.from(familyTree.keys());

    const tree = parents.reduce((acc, parentTag) => {
      acc[parentTag.tagName] = familyTree.get(parentTag).map((e) => e.tagName);

      return acc;
    }, {});

    return [parents.map((e) => e.tagName), tree];
  }, [tags]);

  return (
    <Container>
      <ParentCategoryColumn
        afterChoose={close}
        current={parent}
        setCurrent={setParent}
        items={ancestors}
      />
      <ChildCategoryColumn
        afterChoose={close}
        parent={parent}
        itemMap={itemMap}
      />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
`;
