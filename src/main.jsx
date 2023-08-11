import queryClient, { QueryClientProvider } from '@/query';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import AppContextProvider from './context';
import { PreloadProvider } from './context/preloadContext';
import { RouterProvider } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PreloadProvider>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AppContextProvider>
          <RouterProvider />
        </AppContextProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </PreloadProvider>,
);
