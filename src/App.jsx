import { styled } from 'chimplanet-ui';

import AppRoutes from '@/routes/AppRoutes';
import JobDetailSubscriber from '@/components/JobDetailSubscriber';
import BaseLayout from './layout/BaseLayout';

import '@/styles/App.scss';

function App() {
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
  position: relative;
  min-height: 100%;
  color: ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.backgroundColor.main};
`;
