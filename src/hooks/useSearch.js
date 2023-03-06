import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
export default function useSearch() {
  const navigate = useNavigate();

  return useCallback(
    (words, type) => {
      let query = Array.isArray(words)
        ? words.map((el) => el.trim()).join(',')
        : words;
      navigate(`/search?type=${type}&q=${encodeURIComponent(query)}`);
    },
    [navigate],
  );
}
