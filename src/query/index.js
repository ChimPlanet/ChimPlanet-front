import { QueryClientProvider as Provider, QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // Query 실패시, 0회 재시도 합니다.
      staleTime: 180000, // Stale time, 3 minutes
      suspense: true,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;

export const QueryClientProvider = Provider;
