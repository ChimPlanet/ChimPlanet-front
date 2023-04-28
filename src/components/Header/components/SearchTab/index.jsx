import { styled } from 'chimplanet-ui';

import RealSearchBar from './realSearchBar';
import Recommend from './recommend';
import History from './History';
import {
  SearchContextProvider,
  useSearchContext,
} from '../../context/searchContext';
import { LeftChevronIcon } from '@/common/icons';

/**
 * @param {{afterSearch():void, activeHeaderTab():void, mobile: boolean}}
 * @returns
 */
export default function SearchTab({ afterSearch, activeHeaderTab, mobile }) {
  return (
    <Container>
      <Content data-mobile={mobile}>
        <SearchContextProvider onAfterSearch={afterSearch}>
          <SearchBarWrapper>
            {mobile && (
              <ExitButton
                onClick={activeHeaderTab}
                children={<LeftChevronIcon />}
              />
            )}
            <RealSearchBar mobile={mobile} />
          </SearchBarWrapper>
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

  &[data-mobile='true'] {
    padding: 10px 20px 30px 20px;
  }

  ${({ theme }) => theme.media.desktop`
    ${'width: ' + theme.widths.desktop + 'px'};
  `};

  ${({ theme }) => theme.media.tablet`
    ${'width: ' + theme.widths.tablet + 'px'};
  `};
`;

const SearchBarWrapper = styled.div`
  margin-bottom: 35px;
  display: flex;
`;

const ExitButton = styled.button`
  padding-right: 25px;
  & svg {
    margin: auto;
  }
`;
