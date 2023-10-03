import { PropTypes, styled, useCurrentTheme, useScreenType } from '@chimplanet/ui';
import { useMemo } from 'react';

import { useSearch } from '@components/Header/context/searchContext';
import Tag from '@components/Tag';
import useTag from '@hooks/useTag';
import { removePrefix } from '@utils/str';
import { selectRandomItemsInCollection } from '../../utils';

export default function RecommendTagSection() {
  const { trie } = useTag();
  const { bundle, tags } = useSearch();
  const screenType = useScreenType();

  const recommends = useMemo(() => {
    return selectRandomItemsInCollection(
      trie.similar(removePrefix(bundle.text)),
      screenType !== 'mobile' ? 30 : 10,
    );
  }, [bundle.text, screenType, trie]);

  const theme = useCurrentTheme();

  return (
    <Container>
      {recommends.map((tag) => (
        <Tag
          key={tag}
          color={theme.textColors.septenary}
          borderColor={theme.borderColors.quinary}
          name={' ' + tag}
          onClick={() => tags.add(tag, true)}
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
