import { useNavigate } from '@chimplanet/ui';
import { useCallback } from 'react';

export default function useSearchNavigate() {
  const navigate = useNavigate();

  const goto = useCallback(
    (words, type) => {
      window.location.replace('#'); // remove the hash

      let query = Array.isArray(words)
        ? words.map((el) => el.trim()).join(',')
        : words;
      navigate(`/search?type=${type}&q=${encodeURIComponent(query)}`);
    },
    [navigate],
  );

  return goto;
}
