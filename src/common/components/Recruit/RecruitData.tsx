import { ActionPayload, useQuery } from '@hooks/useQuery';
import { Offer } from '@services/entity';

interface Props {
  children: (data: Offer[]) => React.ReactNode;
  payload: ActionPayload<'offers'>;
}

export const RecruitData = ({ children, payload }: Props) => {
  const { data } = useQuery('offers', payload);

  if (!data) return null;

  return children(data);
};

export default RecruitData;
