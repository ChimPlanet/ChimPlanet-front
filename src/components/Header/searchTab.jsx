import { func } from 'prop-types';
import styled from 'styled-components';
import RealSearchBar from './realSearchBar';
import RecommendTagSection from './recommendTagSection';
import useTagSearch from '../../hooks/useTagSearch';

const Container = styled.div`
  padding-top: 20px;
  background-color: white;
`;

SearchTab.propTypes = {
  activeHeaderTab: func.isRequired,
};

export default function SearchTab({ activeHeaderTab }) {
  const handle = useTagSearch();

  return (
    <Container>
      <RealSearchBar {...handle} />
      <RecommendTagSection word={handle.input} addTag={handle.addTag} />
    </Container>
  );
}
