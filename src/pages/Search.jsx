import { useMemo } from 'react';
import { useLocation, styled } from 'chimplanet-ui';

import InvalidSearch from '@/components/Search/InvalidSearch';
import SearchResult from '@/components/Search/SearchResult';
import { getSearchMetadata } from '@/utils';

export default function Search() {
  const location = useLocation();

  const metadata = useMemo(() => {
    const params = new URLSearchParams(decodeURIComponent(location.search));
    return getSearchMetadata(params);
  }, [location.search]);

  return (
    <Container>
      {metadata.words.length === 0 ? (
        <InvalidSearch />
      ) : (
        <SearchResult metadata={metadata} />
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding-bottom: 50px;
`;
