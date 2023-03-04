import fetchTagList from '@/api/tag/fetchTagList';
import { useQuery } from 'react-query';
import { TagQueryKey } from '../constants/query';

export const useTagList = () => {
  return useQuery([TagQueryKey], fetchTagList);
};
