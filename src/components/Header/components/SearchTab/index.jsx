import { styled } from '@chimplanet/ui';

import { LeftChevronIcon } from '@/common/icons';
import {
  SearchContextProvider,
  useSearchContext,
} from '../../context/searchContext';
import History from './History';
import RealSearchBar from './realSearchBar';
import Recommend from './recommend';

/**
 * @param {{afterSearch():void, activeHeaderTab():void, desktop: boolean}}
 * @returns
 */
export default function SearchTab({ afterSearch, activeHeaderTab, desktop }) {
  return (
    <Container>
      <Content data-desktop={desktop}>
        <SearchContextProvider onAfterSearch={afterSearch}>
          <SearchBarWrapper>
            {!desktop && (
              <ExitButton
                onClick={activeHeaderTab}
                children={<LeftChevronIcon />}
              />
            )}
            <RealSearchBar desktop={desktop} />
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
  background-color: ${({ theme }) => theme.bgColors.quaternary};
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 30px 0px;

  &[data-desktop='false'] {
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
