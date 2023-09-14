import { styled } from '@chimplanet/ui';

import useHistory from '@hooks/useHistory';
import { useSearchContext } from '../../../context/searchContext';
import HistoryList from './historyList';

export default function History() {
  const [, { addTag, setInput }] = useSearchContext();
  const { history, removeAll, removeHistory } = useHistory();

  const handleClick = (historyItem) => {
    if (historyItem.at(0) === '#') addTag(historyItem);
    else setInput(historyItem);
  };

  return (
    <Container>
      <Header>
        <Title>최근 검색 기록</Title>
        <RemoveButton onClick={removeAll}>전체삭제</RemoveButton>
      </Header>
      <HistoryList
        onClick={handleClick}
        history={history}
        removeHistory={removeHistory}
      />
    </Container>
  );
}

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
  color: ${({ theme }) => theme.textColors.secondary};
`;
