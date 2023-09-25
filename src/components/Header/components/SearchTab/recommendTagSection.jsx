import { PropTypes, styled, useCurrentTheme, useScreenType } from '@chimplanet/ui';
import { useMemo } from 'react';

import Tag from '@components/Tag';
import useTag from '@hooks/useTag';
import { removePrefix } from '@utils/str';
import { selectRandomItemsInCollection } from '../../utils';

export default function RecommendTagSection({ word, addTag }) {
  const { trie } = useTag();
  const screenType = useScreenType();

  const recommends = useMemo(() => {
    return selectRandomItemsInCollection(
      trie.similar(removePrefix(word)),
      screenType !== 'mobile' ? 30 : 10,
    );
  }, [word, screenType, trie]);

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
