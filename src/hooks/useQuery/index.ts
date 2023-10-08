import { useQuery as useReactQuery } from 'react-query';
import { ActionPayload, Actions } from './action';
import fetchers from './fetcher';

export * from './action';

const calculateQueryKey = (key: any, payload: any) => {
  const queryKey = [key];
  if (payload) queryKey.push(payload);
  return queryKey;
};

export const useQuery = <T extends keyof Actions>(action: T, payload?: ActionPayload<T>) => {
  const queryKey = calculateQueryKey(action, payload);

  return useReactQuery(queryKey, () => fetchers[action](payload));
};
