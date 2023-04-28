import Tag from '@/components/Tag';
import { SearchTagSequenceColor } from '@/constants/color';
import { styled } from 'chimplanet-ui';

export default function RealSearchTagList({ tags, removeTag }) {
  return (
    <Container>
      {tags.map((tag, i) => (
        <Tag
          key={tag}
          name={tag}
          color="black"
          borderColor="transparent"
          fontSize="16px"
          padding="7px 10px"
          weight={400}
          backgroundColor={SearchTagSequenceColor[i]}
          removeSelf={removeTag.bind(null, tag)}
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
`;
