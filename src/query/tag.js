import backend from '@services/backend';
import { useQuery } from 'react-query';
import { QueryKeys } from './keys';

export const useTagList = () => {
  return useQuery([QueryKeys.tag], backend.tags);
};

export const useTag = () => {
  return useQuery([QueryKeys.tag], backend.tags.get);
};
