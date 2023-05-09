import { Link, styled, useNavigate } from 'chimplanet-ui';

import { Chimplanet404 } from '@/common/icons';
import { HOME_PATH } from '@/constants/route';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Title>404 ERROR</Title>
        <SubTitleGroup>
          <SubTitle>죄송합니다.</SubTitle>
          <SubTitle>현재 찾을 수 없는 페이지를 요청 하셨습니다.</SubTitle>
        </SubTitleGroup>
        <Detail>페이지의 주소가 잘못 입력되었거나,</Detail>
        <Detail>주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.</Detail>
        <Detail data-visible-desktop="false">
          입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
        </Detail>
        <ButtonGroup>
          <ToMain to={HOME_PATH}>메인으로</ToMain>
          <Prev onClick={() => navigate(-1)}>이전으로</Prev>
        </ButtonGroup>
      </Content>
      <Icon>
        <Chimplanet404 />
      </Icon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.media.desktop`
    justify-content: space-between;
  `}
  margin-top: 200px;
  padding-bottom: 200px;
`;

const Icon = styled.div`
  display: none;

  ${({ theme }) => theme.media.desktop`
    display: block;
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  display: none;
  color: ${({ theme }) => theme.textColors.primary};
  font-size: 54px;
  font-weight: 500;

  ${({ theme }) => theme.media.desktop`
    display: block;
  `}
`;

const SubTitleGroup = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;

  ${({ theme }) => theme.media.desktop`
    text-align: left;
  `}
`;

const SubTitle = styled.span`
  display: block;
  font-size: 24px;
  margin-bottom: 8px;
  ${({ theme }) => theme.media.desktop`
    display: inline; 
  `}
`;

const Detail = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.textColors.tertiary};
  display: block;
  margin-bottom: 10px;

  ${({ theme }) => theme.media.desktop`
    &[data-visible-desktop='false'] {
        display: none;
    }
  `}
`;

const ButtonGroup = styled.div``;

const Button = styled(Link)`
  display: block;
  border-radius: 8px;
  text-align: center;
  width: 140px;
  padding: 13px 0px;
  font-size: 12px;
  font-weight: 500;
`;

const ToMain = styled(Button)`
  background-color: #00e4b3;
  color: #fff;
`;

const Prev = styled(Button)`
  background-color: #dbdee2;
  color: #101c33;
`;
