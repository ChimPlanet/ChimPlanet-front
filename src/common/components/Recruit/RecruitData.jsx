import { usePopularJobOffer } from '@query/offer';

export const RecruitData = ({ children }) => {
  const { data } = usePopularJobOffer();

  return children(data);
};
