import styled from 'styled-components';
import RealSearchBar from './realSearchBar';
import useTagSearch from '@/hooks/useTagSearch';
import Recommend from './recommend';
import History from './History';
import useTagTrie from '@/hooks/useTagTrie';
import PropTypes from 'prop-types';
import { Suspense, useMemo } from 'react';
import Loading from '@/components/Loading';

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

  const contentType = useMemo(() => {
    return context.input.length === 0 ? 'history' : 'recommend';
  }, [context.input]);

  return (
    <Container>
      <Content>
        <RealSearchBar {...context} />
        <Suspense fallback={<Loading />}>
          <SearchContent
            type={contentType}
            addTag={context.addTag}
            input={context.input}
          />
        </Suspense>
      </Content>
    </Container>
  );
}

/**
 *
 * @param {{type: 'history' | 'recommend', addTag(tag): void, input: string}}
 * @returns
 */
function SearchContent({ type, addTag, input }) {
  useTagTrie();
  return type === 'history' ? (
    <History addTag={addTag} />
  ) : (
    <Recommend word={input} addTag={addTag} />
  );
}

SearchContent.propTypes = {
  type: PropTypes.string.isRequired,
  addTag: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};
