import { useRecruitContextUpdater } from '@chimplanet/ui';
import { ActionPayload, useQuery } from '@hooks/useQuery';
import { Offer } from '@services/entity';
import { useLayoutEffect } from 'react';

interface Props {
  children: (data: Offer[]) => React.ReactNode;
  payload: ActionPayload<'offers'>;
}

export const RecruitData = ({ children, payload }: Props) => {
  const update = useRecruitContextUpdater();
  const { data } = useQuery('offers', payload);

  useLayoutEffect(() => {
    data && update((ctx) => ({ ...ctx, length: data.length }));
  }, [data, update]);

  if (!data) return null;

  return children(data);
};

export default RecruitData;
