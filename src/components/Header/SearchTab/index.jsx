import styled from 'styled-components';
import RealSearchBar from './realSearchBar';
import useTagSearch from '@/hooks/useTagSearch';
import Recommend from './recommend';
import History from './History';

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

export default function SearchTab() {
  const context = useTagSearch();

  return (
    <Container>
      <Content>
        <RealSearchBar {...context} />
        {context.input.length === 0 ? (
          <History setTags={context.setTags} />
        ) : (
          <Recommend word={context.input} addTag={context.addTag} />
        )}
      </Content>
    </Container>
  );
}
