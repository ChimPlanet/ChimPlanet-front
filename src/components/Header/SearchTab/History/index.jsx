import useHistory from '@/hooks/useHistory';
import styled from 'styled-components';
import HistoryList from './historyList';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: 500;
`;

const RemoveButton = styled.button`
  color: ${({ theme }) => theme.colors.sub};
`;

export default function History({ addTag }) {
  const { history, removeAll, removeHistory } = useHistory();

  return (
    <Container>
      <Header>
        <Title>최근 검색 기록</Title>
        <RemoveButton onClick={removeAll}>전체삭제</RemoveButton>
      </Header>
      <HistoryList
        addTag={addTag}
        history={history}
        removeHistory={removeHistory}
      />
    </Container>
  );
}

History.propTypes = {
  addTag: PropTypes.func.isRequired,
};
