import { useQuery } from '@hooks/useQuery';

export const RecruitData = ({ children }) => {
  const { data } = useQuery('offers', { type: 'popular' });

  return children(data);
};
