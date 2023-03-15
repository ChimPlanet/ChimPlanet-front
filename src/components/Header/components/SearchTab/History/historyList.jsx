import PropTypes from 'prop-types';
import { useCallback } from 'react';
import styled from 'styled-components';

import { XIcon } from '@/common/icons';
import { ignorePrefix } from '@/utils/str';

/**
 * @param {{history: string[], removeHistory(index: number):void, addTag(tag): void}} props
 */
export default function HistoryList({ history, removeHistory, addTag }) {
  /**
   * @type {(history: string)}
   */
  const handleClickHistory = useCallback(
    (history) => () => addTag(ignorePrefix(history)),
    [addTag],
  );

  return (
    <Container>
      {history.slice(0, 8).map((item, index) => (
        <Item key={index}>
          <ItemTitle onClick={handleClickHistory(item)}>{item}</ItemTitle>
          <DeleteButton onClick={() => removeHistory(index)}>
            <XIcon />
          </DeleteButton>
        </Item>
      ))}
    </Container>
  );
}

HistoryList.propTypes = {
  history: PropTypes.array.isRequired,
  removeHistory: PropTypes.func.isRequired,
  addTag: PropTypes.func.isRequired,
};

const Container = styled.ul`
  font-size: 18px;
  padding-top: 20px;
  padding-bottom: 15px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 7px 0px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f5f6f7;
  }
`;

const ItemTitle = styled.div`
  flex-grow: 1;
`;

const DeleteButton = styled.button``;
