import { useNavigate } from '@chimplanet/ui';
import { useMemo } from 'react';

const ARTICLE_QUERY_KEY = 'a';

export const useArticle = () => {
  const navigate = useNavigate();

  const id = new URLSearchParams(window.location.search).get(ARTICLE_QUERY_KEY);

  const handle = useMemo(
    () => ({
      open: (id: number) => navigate(`?${ARTICLE_QUERY_KEY}=${id}`, { replace: false }),
      close: () => navigate('', { replace: true }),
    }),
    [navigate],
  );

  return [id, handle] as [string | null, { open(id: number): void; close(): void }];
};
