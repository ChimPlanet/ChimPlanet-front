import styled from 'styled-components';
import RealSearchBar from './realSearchBar';
import useTagSearch from '@/hooks/useTagSearch';
import Recommend from './recommend';
import History from './History';
import { SIZE_WIDTH } from '@/constants/size';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100vw;
`;

const Content = styled.div`
  width: ${SIZE_WIDTH}px;
  margin: 0 auto;
  padding: 30px 0px;
`;

export default function SearchTab() {
  const context = useTagSearch();

  return (
    <Container>
      <Content>
        <RealSearchBar {...context} />
        {context.input.length === 0 ? (
          <History />
        ) : (
          <Recommend word={context.input} addTag={context.addTag} />
        )}
      </Content>
    </Container>
  );
}
