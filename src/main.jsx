import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import RootBoundary from '@/pages/RootBoundary';
import queryClient, { QueryClientProvider } from '@/query';
import { BrowserRouter as RootRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <RootRouter /* basename={BASE_NAME} */>
        <RootBoundary>
          <App />
        </RootBoundary>
      </RootRouter>
    </RecoilRoot>
  </QueryClientProvider>,
);
