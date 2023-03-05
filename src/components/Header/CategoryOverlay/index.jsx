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

export default function CategoryOverlay() {
  const [parent, setParent] = useState(null);

  return (
    <Container>
      <ParentCategoryColumn current={parent} setCurrent={setParent} />
      <ChildCategoryColumn parent={parent} />
    </Container>
  );
}
