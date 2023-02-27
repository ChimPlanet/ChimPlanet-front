import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import RootBoundary from '@/pages/RootBoundary';
import queryClient, { QueryClientProvider } from '@/query';
import { HashRouter as RootRouter } from 'react-router-dom';
import { BASE_NAME } from './constants';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RootRouter /* basename={BASE_NAME} */>
          <RootBoundary>
            <App />
          </RootBoundary>
        </RootRouter>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
);
