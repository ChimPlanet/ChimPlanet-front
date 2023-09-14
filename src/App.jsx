import { CPThemeProvider, ScreenTypeProvider } from '@chimplanet/ui';
import { CompositeProvider } from '@components';
import { ArticleRenderer } from '@components/ArticleRenderer/ArticleRenderer';
import { PreloadProvider } from '@context/preloadContext';
import queryClient, { QueryClientProvider } from '@query';
import { RouterProvider } from '@routes';
import { baseTheme } from '@theme';
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
    <CompositeProvider
      providers={[
        <PreloadProvider />,
        <QueryClientProvider client={queryClient} />,
        <RecoilRoot />,
        <ScreenTypeProvider screens={baseTheme.sizes} />,
        <CPThemeProvider />,
        <RouterProvider />,
      ]}
    >
      <ArticleRenderer />
    </CompositeProvider>
  );
}
