import useHistory from '@/hooks/useHistory';
import styled from 'styled-components';
import HistoryList from './historyList';

const Container = styled.div`
  color: #101c33;
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
  color: #868e96;
`;

export default function History() {
  const { history, removeAll, removeHistory } = useHistory();

  return (
    <Container>
      <Header>
        <Title>최근 검색 기록</Title>
        <RemoveButton onClick={removeAll}>전체삭제</RemoveButton>
      </Header>
      <HistoryList history={history} removeHistory={removeHistory} />
    </Container>
  );
}
