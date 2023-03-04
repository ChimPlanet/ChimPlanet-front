import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import RootBoundary from '@/pages/RootBoundary';
import queryClient, { QueryClientProvider } from '@/query';
import { BrowserRouter as RootRouter } from 'react-router-dom';
import { SizeTypeContextProvider } from '@/context/sizeTypeContext';
import { BASE_NAME } from './constants';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SizeTypeContextProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <RootRouter /* basename={BASE_NAME} */>
            <RootBoundary>
              <App />
            </RootBoundary>
          </RootRouter>
        </RecoilRoot>
      </QueryClientProvider>
    </SizeTypeContextProvider>
  </React.StrictMode>,
);
