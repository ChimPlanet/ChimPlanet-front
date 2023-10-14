import { styled } from '@chimplanet/ui';
import { useState } from 'react';

import { Tag } from '@services/entity';
import ChildCategoryColumn from './ChildCategoryColumn';
import ParentCategoryColumn from './ParentCategoryColumn';
import useTagCategory from './useTagCategory';

interface Props {
  close(): void;
}

export default function CategoryOverlay({ close }: Props) {
  const [parent, setParent] = useState<Tag | null>(null);

  const { category, topLevels } = useTagCategory();

  return (
    <Container>
      <ParentCategoryColumn
        afterChoose={close}
        current={parent}
        setCurrent={setParent}
        items={topLevels}
      />
      <ChildCategoryColumn afterChoose={close} parent={parent} category={category} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
`;
