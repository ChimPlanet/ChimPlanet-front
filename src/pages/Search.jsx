import NoResultFound from '@/components/Search/NoResultFound';
import SearchResult from '@/components/Search/SearchResult';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

export default function Search() {
  const location = useLocation();

  const metadata = useMemo(() => {
    const params = new URLSearchParams(decodeURIComponent(location.search));
    return {
      type: params.get('type') || 'normal',
      words: params.get('q')?.split(',') || [],
    };
  }, [location.search]);

  return (
    <Container>
      {metadata.words.length === 0 ? (
        <NoResultFound />
      ) : (
        <SearchResult words={metadata.words} />
      )}
    </Container>
  );
}
