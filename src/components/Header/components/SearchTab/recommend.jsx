import { styled } from 'chimplanet-ui';
import { useSearchContext } from '../../context/searchContext';

import RecommendTagSection from './recommendTagSection';

export default function Recommend() {
  const [{ searchType, input }, { addTag }] = useSearchContext();

  return (
    <>
      <Title>추천 태그</Title>
      {searchType === 'tag' && (
        <RecommendTagSection word={input} addTag={addTag} />
      )}
    </>
  );
}

const Title = styled.p`
  margin: 2.2em 0em;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.main};
`;
