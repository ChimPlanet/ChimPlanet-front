//import fetchTagList from '@/service/tag/fetchTagList';
import { useQuery } from 'react-query';
import { TagQueryKey } from '../constants/query';
import backend from '@/service/backend';

export const useTagList = () => {
  return useQuery([TagQueryKey], backend.tags.tagList);
};

export const useTag = () => {
  return useQuery([TagQueryKey], backend.tags.tag);
};
