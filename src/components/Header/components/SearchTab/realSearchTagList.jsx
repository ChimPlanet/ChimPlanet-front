import { styled } from '@chimplanet/ui';
import { useSearch } from '@components/Header/context/searchContext';
import Tag from '@components/Tag';
import { SearchTagSequenceColor } from '@constants/color';

export default function RealSearchTagList() {
  const { tags, bundle } = useSearch();
  return (
    <Container>
      {bundle.tags.map((tag, i) => (
        <Tag
          key={tag}
          name={tag}
          color="black"
          borderColor="transparent"
          fontSize="16px"
          padding="7px 10px"
          weight={400}
          backgroundColor={SearchTagSequenceColor[i]}
          removeSelf={() => tags.remove(tag)}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  padding-right: 10px;
  flex-wrap: nowrap;
`;
