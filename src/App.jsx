import { styled } from '@chimplanet/ui';

import JobDetailSubscriber from '@/components/JobDetailSubscriber';
import AppRoutes from '@/routes/AppRoutes';
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
  color: ${({ theme }) => theme.textColors.primary};
  background-color: ${({ theme }) => theme.bgColors.primary};
`;
