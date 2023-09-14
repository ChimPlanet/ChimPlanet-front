//import fetchTagList from '@services/tag/fetchTagList';
import backend from '@services/backend';
import { useQuery } from 'react-query';
import { TagQueryKey } from '../constants/query';

export const useTagList = () => {
  return useQuery([TagQueryKey], backend.tags.tagList);
};

export const useTag = () => {
  return useQuery([TagQueryKey], backend.tags.tag);
};
