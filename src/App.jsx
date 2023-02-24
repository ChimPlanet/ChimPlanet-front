import AppRoutes from '@/components/AppRoutes';
import Theme from '@/components/Theme';
import '@/styles/App.scss';
import Header from './components/Header';

function App() {
  return (
    <main id="App">
      <Theme>
        <Header />
        <AppRoutes />
      </Theme>
    </main>
  );
}

export default App;
