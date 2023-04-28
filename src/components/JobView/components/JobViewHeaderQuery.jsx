import { styled } from 'chimplanet-ui';
import { useJobViewContext } from '../JobViewContext';
import Tag from '@/components/Tag';
import { SearchTagSequenceColor } from '@/constants/color';

export default function JobViewHeaderQuery() {
  const [context] = useJobViewContext();

  if (!context.searchMetadata) {
    throw new Error('No search metadata');
  }

  return (
    <Wrapper>
      {context.searchMetadata.type === 'normal' ? (
        <NormalQuery query={context.searchMetadata.words.at(0)} />
      ) : (
        <TagQuery words={context.searchMetadata.words} />
      )}
    </Wrapper>
  );
}

/** @param {{words: string[]}} */
function TagQuery({ words }) {
  return (
    <TagContainer>
      {words.map((tag, i) => (
        <Tag
          key={tag}
          name={tag}
          color="black"
          borderColor="transparent"
          fontSize="16px"
          padding="7px 10px"
          weight={400}
          backgroundColor={SearchTagSequenceColor[i]}
          // removeSelf={() => removeTag(tag)}
        />
      ))}
    </TagContainer>
  );
}

/** @param {{query: string}} */
function NormalQuery({ query }) {
  return <NormalTypography>'{query}' 검색결과</NormalTypography>;
}

const Wrapper = styled.div`
  display: table;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  padding-right: 10px;
`;

const NormalTypography = styled.span`
  display: table-cell;
  font-size: 20px;
  font-weight: 700;
  vertical-align: middle;
`;
