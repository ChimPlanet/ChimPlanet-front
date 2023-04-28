import { useCallback } from 'react';
import { useNavigate } from 'chimplanet-ui';

export default function useSearchNavigate() {
  const navigate = useNavigate();

  const goto = useCallback(
    (words, type) => {
      let query = Array.isArray(words)
        ? words.map((el) => el.trim()).join(',')
        : words;
      navigate(`/search?type=${type}&q=${encodeURIComponent(query)}`);
    },
    [navigate],
  );

  return goto;
}
