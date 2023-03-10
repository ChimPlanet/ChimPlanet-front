import styled from 'styled-components';
import RecommendTagSection from './recommendTagSection';

const Title = styled.p`
  margin: 2.2em 0em;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
`;

/**
 * @param {{word: string, addTag(tag: string):void}}
 */
export default function Recommend({ word, addTag }) {
  return (
    <>
      <Title>추천 태그</Title>
      <RecommendTagSection word={word} addTag={addTag} />
    </>
  );
}
