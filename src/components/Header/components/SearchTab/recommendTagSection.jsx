import { PropTypes, styled, useCurrentTheme } from 'chimplanet-ui';
import { useMemo } from 'react';

import TagTrie from '@/utils/tagTrie';
import Tag from '@/components/Tag';
import { ignorePrefix } from '@/utils/str';
import { selectRandomItemsInCollection } from '../../utils';

export default function RecommendTagSection({ word, addTag }) {
  const recommends = useMemo(() => {
    return selectRandomItemsInCollection(
      TagTrie.getInstance().getSimilarTags(ignorePrefix(word)),
      40,
    );
  }, [word]);

  const theme = useCurrentTheme();

  return (
    <Container>
      {recommends.map((tag) => (
        <Tag
          key={tag}
          color={theme.textColors.septenary}
          borderColor={theme.borderColors.quinary}
          name={' ' + tag}
          onClick={addTag.bind(null, '#' + tag, true)}
          padding="7px 18px 9px 16px"
        />
      ))}
    </Container>
  );
}

RecommendTagSection.propTypes = {
  word: PropTypes.string,
  addTag: PropTypes.func,
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;
