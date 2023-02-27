import TagTrie from '@/utils/tagTrie';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useTagRecommendEngine from '@/hooks/useTagRecommendEngine';
import { useMemo } from 'react';
import Tag from '@/components/Tag';
import { ignorePrefix } from '@/utils/str';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

RecommendTagSection.propTypes = {
  word: PropTypes.string,
  addTag: PropTypes.func,
};

export default function RecommendTagSection({ word, addTag }) {
  useTagRecommendEngine();

  const recommends = useMemo(() => {
    if (TagTrie.ready() && word.length > 0) {
      return TagTrie.getInstance().getSimilarTags(ignorePrefix(word));
    }
    return [];
  }, [word]);

  return (
    <Container>
      {recommends.map((tag) => (
        <Tag key={tag} name={tag} onClick={() => addTag(tag, true)} />
      ))}
    </Container>
  );
}
