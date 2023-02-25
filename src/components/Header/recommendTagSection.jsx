import TagTrie from '@/utils/tagTrie';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useTagRecommendEngine from '@/hooks/useTagRecommendEngine';
import { useMemo } from 'react';
import Tag from '@/components/Tag';

const Container = styled.div``;

const Title = styled.p`
  margin: 2.2em 0em;
  text-align: center;
  font-size: 14px;
`;

RecommendTagSection.propTypes = {
  word: PropTypes.string,
  addTag: PropTypes.func,
};

export default function RecommendTagSection({ word, addTag }) {
  useTagRecommendEngine();

  const recommends = useMemo(() => {
    if (TagTrie.ready() && word.length > 0) {
      console.log(TagTrie.getInstance());
      return TagTrie.getInstance().getSimilarTags(word);
    }
    return [];
  }, [word]);

  console.log(recommends);

  return (
    <Container>
      <Title>추천 태그</Title>
      {recommends.map((tag) => (
        <Tag key={tag} name={tag} />
      ))}
    </Container>
  );
}
