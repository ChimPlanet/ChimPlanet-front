import XIcon from '@/components/icons/XIcon';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  font-size: 18px;
  padding-top: 20px;
  padding-bottom: 15px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 7px 0px;
`;

const DeleteButton = styled.button``;

HistoryList.propTypes = {
  history: PropTypes.array.isRequired,
  removeHistory: PropTypes.func.isRequired,
  setTags: PropTypes.func.isRequired,
};

/**
 * @param {{history: string[], removeHistory(index: number):void, setTags(tags): void}} props
 */
export default function HistoryList({ history, removeHistory, setTags }) {
  /**
   * @type {(history: string)}
   */
  const handleClickHistory = useCallback(
    (history) => () => setTags(history.split(', ')),
    [setTags],
  );

  return (
    <Container>
      {history.map((item, index) => (
        <Item key={index}>
          <span onClick={handleClickHistory(item)}>{item}</span>
          <DeleteButton onClick={() => removeHistory(index)}>
            <XIcon />
          </DeleteButton>
        </Item>
      ))}
    </Container>
  );
}
