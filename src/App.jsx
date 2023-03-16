import AppRoutes from '@/routes/AppRoutes';
import styled from 'styled-components';
import { useEffect } from 'react';
import fetchTagList from '@/service/tag/fetchTagList';
import TagTrie from '@/utils/tagTrie';
import AppContextProvider from './context';
import JobDetailSubscriber from '@/components/JobDetailSubscriber';

import '@/styles/App.scss';

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
    <AppContextProvider>
      <Main id="App">
        <AppRoutes />
        <JobDetailSubscriber />
      </Main>
    </AppContextProvider>
  );
}

export default App;
