import AppRoutes from '@/pages/AppRoutes';
import '@/styles/App.scss';
import styled from 'styled-components';
import Header from './components/Header';
import { useEffect } from 'react';
import fetchTagList from '@/api/tag/fetchTagList';
import TagTrie from '@/utils/tagTrie';
import AppContextProvider from './context';
import JobDetailSubscriber from '@/components/JobDetailSubscriber';
import Banner from './components/Banner/index';

const Main = styled.main`
  color: ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.backgroundColor.main};
`;

const Content = styled.div`
  margin: 0 auto;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `}
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
        <Banner />
        <Content>
          <AppRoutes />
        </Content>
        <JobDetailSubscriber />
      </Main>
    </AppContextProvider>
  );
}

export default App;
