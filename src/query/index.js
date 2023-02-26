import { QueryClient, QueryClientProvider as Provider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // Query 실패시, 2회 재시도 합니다.
      staleTime: 180000, // Stale time, 3 minutes
      suspense: true,
    },
  },
});

export default queryClient;

export const QueryClientProvider = Provider;
