import styled from 'styled-components';

import RealSearchBar from './realSearchBar';
import Recommend from './recommend';
import History from './History';
import {
  SearchContextProvider,
  useSearchContext,
} from '../../context/searchContext';

/**
 * @param {{afterSearch():void}} param0
 * @returns
 */
export default function SearchTab({ afterSearch }) {
  return (
    <Container>
      <Content>
        <SearchContextProvider onAfterSearch={afterSearch}>
          <RealSearchBar />
          <SearchOptionalSection />
        </SearchContextProvider>
      </Content>
    </Container>
  );
}

export function SearchOptionalSection() {
  const [{ searchType }] = useSearchContext();
  return searchType === 'normal' ? <History /> : <Recommend />;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundColor.searchbar};
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 30px 0px;

  ${({ theme }) => theme.media.desktop`
    ${'width: ' + theme.widths.desktop + 'px'};
  `};

  ${({ theme }) => theme.media.tablet`
    ${'width: ' + theme.widths.tablet + 'px'};
  `};
`;
