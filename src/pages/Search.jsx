import NoResultFound from '@/components/Search/NoResultFound';
import SearchResult from '@/components/Search/SearchResult';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div``;

export default function Search() {
  const location = useLocation();

  const words = useMemo(() => {
    return (
      new URLSearchParams(decodeURIComponent(location.search))
        .get('q')
        ?.split(',') || []
    );
  }, [location.search]);

  console.log(words);

  return (
    <Container>
      {words.length === 0 ? <NoResultFound /> : <SearchResult words={words} />}
    </Container>
  );
}
