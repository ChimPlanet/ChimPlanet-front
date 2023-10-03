import { styled } from '@chimplanet/ui';

import RecommendTagSection from './recommendTagSection';

export default function Recommend() {
  return (
    <>
      <Title>추천 태그</Title>
      <RecommendTagSection />
    </>
  );
}

const Title = styled.p`
  margin: 2.2em 0em;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.textColors.primary};
`;
