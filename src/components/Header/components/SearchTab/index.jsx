import styled from 'styled-components';
import { useMemo } from 'react';

import RealSearchBar from './realSearchBar';
import useTagSearch from '@/components/Header/hooks/useTagSearch';
import Recommend from './recommend';
import History from './History';

/**
 * @param {{afterSearch():void}} param0
 * @returns
 */
export default function SearchTab({ afterSearch }) {
  const context = useTagSearch(afterSearch);

  const contentType = useMemo(() => {
    return context.input.length === 0 ? 'history' : 'recommend';
  }, [context.input]);

  return (
    <Container>
      <Content>
        <RealSearchBar {...context} />
        {contentType === 'history' ? (
          <History addTag={context.addTag} />
        ) : (
          <Recommend word={context.input} addTag={context.addTag} />
        )}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundColor.main};
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
