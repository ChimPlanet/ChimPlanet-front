import AppRoutes from '@/components/AppRoutes';
import Theme from '@/components/Theme';
import '@/styles/App.scss';
import styled from 'styled-components';
import Header from './components/Header';

const Main = styled.main`
  color: ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.backgroundColor.main};
`;

function App() {
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
