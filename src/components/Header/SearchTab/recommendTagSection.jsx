import TagTrie from '@/utils/tagTrie';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useMemo } from 'react';
import Tag from '@/components/Tag';
import { ignorePrefix } from '@/utils/str';
import { SIZE_WIDTH } from '@/constants/size';
import { useTagList } from '@/query/tag';

const Container = styled.div`
  max-width: ${SIZE_WIDTH}px;
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
  const { data: tags } = useTagList();

  const recommends = useMemo(() => {
    return TagTrie.getInstance(tags).getSimilarTags(ignorePrefix(word));
  }, [word, tags]);

  return (
    <Container>
      {recommends.map((tag) => (
        <Tag
          key={tag}
          color="#8E94A0"
          borderColor="#DBDEE2"
          name={' ' + tag}
          onClick={() => addTag(tag, true)}
          padding="7px 18px 9px 16px"
        />
      ))}
    </Container>
  );
}
