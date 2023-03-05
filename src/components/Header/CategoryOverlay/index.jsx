import styled from 'styled-components';
import PropTypes from 'prop-types';
import ParentCategoryColumn from './parentCategoryColumn';
import ChildCategoryColumn from './childCategoryColumn';
import { useState } from 'react';

const Container = styled.div`
  position: fixed;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
`;

/**
 * @typedef {Object} CategoryOverlayProps
 * @property {()=>void} close
 * @property {number} top
 * @property {number} left
 *
 * @param {{close(): void}}
 * @returns
 */
export default function CategoryOverlay({ close, top = 0, left = 0 }) {
  const [parent, setParent] = useState(null);

  return (
    <Container onMouseLeave={close} top={top + 1} left={left}>
      <ParentCategoryColumn current={parent} setCurrent={setParent} />
      <ChildCategoryColumn parent={parent} />
    </Container>
  );
}

CategoryOverlay.propTypes = {
  close: PropTypes.func.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
};
