import { styled, useNavigate } from '@chimplanet/ui';
import Tag from '@components/Tag';
import { SearchTagSequenceColor } from '@constants/color';
import { useJobViewContext } from '../JobViewContext';

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
  const navigate = useNavigate();

  const removeTagQuery = (tag) => {
    let query = words
      .filter((e) => e !== tag)
      .map((el) => el.trim())
      .join(',');

    if (query.length > 1) {
      navigate(`/search?type=tag&q=${encodeURIComponent(query)}`);
    } else {
      alert('하나 이상의 태그가 존재해야합니다.');
    }
  };

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
          removeSelf={() => removeTagQuery(tag)}
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
