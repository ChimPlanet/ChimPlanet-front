import AppRoutes from '@/pages/AppRoutes';
import '@/styles/App.scss';
import styled from 'styled-components';
import Header from './components/Header';
import { useEffect } from 'react';
import fetchTagList from '@/api/tag/fetchTagList';
import TagTrie from '@/utils/tagTrie';
import AppContextProvider from './context';
import JobDetailSubscriber from '@/components/JobOffer/JobDetailSubscriber';

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
        <Header />
        <AppRoutes />
        <JobDetailSubscriber />
      </Main>
    </AppContextProvider>
  );
}

export default App;
