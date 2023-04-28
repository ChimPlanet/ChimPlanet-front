import { useEffect } from 'react';
import { styled } from 'chimplanet-ui';

import AppRoutes from '@/routes/AppRoutes';
import fetchTagList from '@/service/tag/fetchTagList';
import TagTrie from '@/utils/tagTrie';
import JobDetailSubscriber from '@/components/JobDetailSubscriber';
import BaseLayout from './layout/BaseLayout';

import '@/styles/App.scss';

function App() {
  // ! 단 한번 필요한 데이터를 초기화
  useEffect(() => {
    fetchTagList().then((tags) => TagTrie.getInstance(tags));
  }, []);

  return (
    <Main id="App">
      <BaseLayout>
        <AppRoutes />
      </BaseLayout>
      <JobDetailSubscriber />
    </Main>
  );
}

export default App;

const Main = styled.main`
  color: ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.backgroundColor.main};
`;
