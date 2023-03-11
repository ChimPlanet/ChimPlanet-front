import styled from 'styled-components';
import { useJobViewContext } from '../JobViewContext';
import Tag from '@/components/Tag';
import { SearchTagSequenceColor } from '@/constants/color';

const Wrapper = styled.div``;

export default function JobViewHeaderQuery({}) {
  const [context, dispatch] = useJobViewContext();

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

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  padding-right: 10px;
`;

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
  return <></>;
}
