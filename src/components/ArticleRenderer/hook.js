import { useNavigate } from '@chimplanet/ui';
import { useMemo } from 'react';

const ARTICLE_QUERY_KEY = 'a';

export const useArticle = () => {
  const navigate = useNavigate();

  const id = new URLSearchParams(window.location.search).get(ARTICLE_QUERY_KEY);

  const handle = useMemo(
    () => ({
      open: () => navigate(`?${ARTICLE_QUERY_KEY}=${id}`, { replace: true }),
      close: () => navigate('', { replace: true }),
    }),
    [navigate],
  );

  return [id, handle];
};
