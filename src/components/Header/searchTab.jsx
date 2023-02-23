import { func } from 'prop-types';
import { useCallback } from 'react';
import styled from 'styled-components';
import RealSearchBar from './realSearchBar';
import RecommendTagSection from './recommendTagSection';

const Container = styled.div`
  padding-top: 20px;
  background-color: white;
`;

SearchTab.propTypes = {
  activeHeaderTab: func.isRequired,
};

export default function SearchTab({ activeHeaderTab }) {
  const addTag = useCallback(() => {}, []);
  const removeTag = useCallback(() => {}, []);

  return (
    <Container>
      <RealSearchBar tags={[]} addTag={addTag} removeTag={removeTag} />
      <RecommendTagSection word={''} addTag={addTag} />
    </Container>
  );
}
