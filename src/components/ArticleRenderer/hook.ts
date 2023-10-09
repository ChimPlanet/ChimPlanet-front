import { useNavigate } from '@chimplanet/ui';
import { Offer } from '@services/entity';
import { useMemo } from 'react';
import { UIOfferVO } from '../../../../chimplanet-ui/src/components/JobOffer/JobOffer';

const ARTICLE_QUERY_KEY = 'a';

export const useArticle = () => {
  const navigate = useNavigate();

  const id = new URLSearchParams(window.location.search).get(ARTICLE_QUERY_KEY);

  const handle = useMemo(
    () => ({
      open: (o: number | Offer | UIOfferVO) =>
        navigate(`?${ARTICLE_QUERY_KEY}=${typeof o === 'object' ? o.id : o}`, {
          replace: false,
        }),
      close: () => navigate('', { replace: true }),
    }),
    [navigate],
  );

  return [id, handle] as [string | null, { open(id: number): void; close(): void }];
};
