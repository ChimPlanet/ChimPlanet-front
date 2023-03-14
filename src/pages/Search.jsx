import InvalidSearch from '@/components/Search/InvalidSearch';
import SearchResult from '@/components/Search/SearchResult';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 30px;
`;

export default function Search() {
  const location = useLocation();

  const metadata = useMemo(() => {
    const params = new URLSearchParams(decodeURIComponent(location.search));
    return {
      type: params.get('type') || 'normal', // 타입이 만약 없는 경우 일반 검색으로 간주함.
      words: params.get('q')?.split(',') || [], // 검색 쿼리 배열
    };
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
