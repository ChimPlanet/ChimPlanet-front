import { ChimplanetFloor } from '@/common/icons';
import { styled } from 'chimplanet-ui';

export const FallbackFetching = ({
  label = '오류! 데이터를 가져올 수 없습니다.',
}) => {
  return (
    <Container>
      <ChimplanetFloor />
      <h3>{label}</h3>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  margin: auto;
  padding-top: 50px;
  width: 100%;
  height: 100%;
  & svg {
    display: block;
    margin: auto;
    width: 100%;
  }
  & h3 {
    margin: 20px;
    text-align: center;
  }
`;
