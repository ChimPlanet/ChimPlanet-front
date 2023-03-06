import styled from 'styled-components';
import ParentCategoryColumn from './parentCategoryColumn';
import ChildCategoryColumn from './childCategoryColumn';
import { useState } from 'react';

const Container = styled.div`
  margin-top: 1px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
`;

/**
 * @param {{close():void}}
 * @returns
 */
export default function CategoryOverlay({ close }) {
  const [parent, setParent] = useState(null);
  return (
    <Container>
      <ParentCategoryColumn
        afterChoose={close}
        current={parent}
        setCurrent={setParent}
      />
      <ChildCategoryColumn afterChoose={close} parent={parent} />
    </Container>
  );
}
