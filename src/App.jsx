import { CPThemeProvider, ScreenTypeProvider } from '@chimplanet/ui';
import { CompositeProvider } from '@components';
import queryClient, { QueryClientProvider } from '@query';
import { RouterProvider } from '@routes';
import { baseTheme } from '@theme';
import { RecoilRoot } from 'recoil';

const providers = [
  <QueryClientProvider client={queryClient} />,
  <RecoilRoot />,
  <ScreenTypeProvider screens={baseTheme.sizes} />,
  <CPThemeProvider />,
  <RouterProvider />,
];

export default function App() {
  return <CompositeProvider providers={providers} />;
}
