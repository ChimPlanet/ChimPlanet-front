import AppRoutes from '@/components/AppRoutes';
import Theme from '@/components/Theme';
import '@/styles/App.scss';
import styled from 'styled-components';
import Header from './components/Header';
import { useEffect } from 'react';
import fetchTagList from '@/api/tag/fetchTagList';
import TagTrie from '@/utils/tagTrie';

const Main = styled.main`
  color: ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.backgroundColor.main};
`;

function App() {
  // ! 단 한번 필요한 데이터를 초기화
  useEffect(() => {
    fetchTagList().then((tags) => TagTrie.getInstance(tags));
  }, []);

  return (
    <Theme>
      <Main id="App">
        <Header />
        <AppRoutes />
      </Main>
    </Theme>
  );
}

export default App;
