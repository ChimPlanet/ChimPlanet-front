import { Chimplanet500 } from '@/common/icons';
import { HOME_PATH } from '@/constants/route';
import { styled } from '@chimplanet/ui';

export default function Error() {
  const handleRefresh = () => {
    window.location.href = HOME_PATH;
  };
  return (
    <Container>
      <Chimplanet500 />
      <Content>
        <ErrorCode>500 ERROR</ErrorCode>
        <div>
          <Title>죄송합니다.</Title>
          <Title> 서버를 연결하는데 문제가 발생했습니다.</Title>
        </div>
        <MessageBox>
          <Message>새로고침을 하시거나 나중에 다시 시도해 주십시오.</Message>
          <Message>최대한 빠른 시일 내에 해결하겠습니다.</Message>
        </MessageBox>
        <RefreshButton onClick={handleRefresh}>새로고침</RefreshButton>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100svh;
  justify-content: center;
  align-items: center;
  column-gap: 60px;
  flex-direction: column;
  row-gap: 35px;
  & > svg {
    height: 140px;
    width: 240px;
  }

  ${({ theme }) => theme.media.desktop`
    flex-direction: row;
    & > svg {
      height: 300px;
    width: 500px;
    }
  `}
  ${({ theme }) => theme.media.tablet`
    & > svg {
      height: 200px;
    width: 330px;
    }
  `}
`;

const Content = styled.div`
  color: #101c33;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${({ theme }) => theme.media.desktop`
     align-items: start; 
     text-align: start;
  `}
`;

const ErrorCode = styled.h1`
  display: none;
  font-weight: 500;
  font-size: 54px;
  ${({ theme }) => theme.media.desktop`
    display: block;
  `}
`;

const Title = styled.p`
  margin: 20px 0px;
  font-size: 18px;
  ${({ theme }) => theme.media.desktop`
    display: inline;
    font-size: 24px;
  `}
  ${({ theme }) => theme.media.tablet`
      font-size: 24px;
  `}
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  font-size: 12px;
  color: #8e94a0;
  ${({ theme }) => theme.media.desktop`
     align-items: start;
     font-size: 20px;
  `}
  ${({ theme }) => theme.media.tablet`
      font-size: 16px;
  `}
`;

const Message = styled.span`
  display: block;
`;

const RefreshButton = styled.button`
  margin-top: 50px;
  display: block;
  border-radius: 8px;
  text-align: center;
  width: 140px;
  padding: 14px 0px;
  font-weight: 500;
  background-color: #00e4b3;
  color: #fff;
  font-size: 12px;
  ${({ theme }) => theme.media.desktop`
      width: 160px;
      font-size: 20px;
  `}
`;
