import queryClient, { QueryClientProvider } from '@/query';
import { RecoilRoot } from 'recoil';
import { CompositeProvider } from './components/CompositeProvider';
import AppContextProvider from './context';
import { PreloadProvider } from './context/preloadContext';
import { RouterProvider } from './routes';

export default function App() {
  return (
    <CompositeProvider
      providers={[
        <PreloadProvider />,
        <QueryClientProvider client={queryClient} />,
        <RecoilRoot />,
        <AppContextProvider />,
      ]}
    >
      <RouterProvider />
    </CompositeProvider>
  );
}
