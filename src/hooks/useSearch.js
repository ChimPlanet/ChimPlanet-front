import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
export default function useSearch() {
  const navigate = useNavigate();

  return useCallback(
    (words) => {
      let query = Array.isArray(words)
        ? words.map((el) => el.trim()).join(',')
        : words;
      navigate(`/search?q=${encodeURIComponent(query)}`);
    },
    [navigate],
  );
}
