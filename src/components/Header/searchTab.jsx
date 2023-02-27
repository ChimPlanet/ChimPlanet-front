import { func } from 'prop-types';
import styled from 'styled-components';
import RealSearchBar from './realSearchBar';
import RecommendTagSection from './recommendTagSection';
import useTagSearch from '@/hooks/useTagSearch';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 20px;
  background-color: white;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

const Title = styled.p`
  margin: 2.2em 0em;
  text-align: center;
  font-size: 14px;
`;

SearchTab.propTypes = {
  activeHeaderTab: func.isRequired,
};

export default function SearchTab({ activeHeaderTab }) {
  const handle = useTagSearch();

  return (
    <Container>
      <RealSearchBar {...handle} />
      <Title>추천 태그</Title>
      <Suspense fallback={<Loading />}>
        <RecommendTagSection word={handle.input} addTag={handle.addTag} />
      </Suspense>
    </Container>
  );
}
