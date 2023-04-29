import React from 'react';
import { styled } from 'chimplanet-ui';
import {
  InstagramIcon,
  NaverCafeIcon,
  TwitchIcon,
  YoutubeIcon,
} from 'chimplanet-ui/icons';

const defaultHeight = 141;
const mobileHeight = 181;

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Logo>침플래닛</Logo>
          <HeaderMenu>
            <div>
              <HeaderAnchor>제작자</HeaderAnchor>
              <HeaderAnchor>이용약관</HeaderAnchor>
              <HeaderAnchor>개인정보 처리방침</HeaderAnchor>
            </div>
          </HeaderMenu>
          <HeaderIcons>
            <TwitchIcon />
            <YoutubeIcon />
            <InstagramIcon />
            <NaverCafeIcon />
          </HeaderIcons>
        </Header>
        <Detail>
          팀장 : 이푸푸
          <br />
          이메일 : chimplanet@gmail.com
          <br />
          침플래닛 ⓒ 2023 CHIMPLANET. ALL RIGHT RESERVED
        </Detail>
      </Wrapper>
    </Container>
  );
}

Footer.defaultHeight = defaultHeight;
Footer.mobileHeight = mobileHeight;

export default Footer;

const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333333;
  padding: 20px 0px;
  height: ${defaultHeight}px;
  ${({ theme }) => theme.media.mobile`
    ${`height: ${mobileHeight}px`};
  `}
`;

const Header = styled.div`
  display: flex;
  ${({ theme }) => theme.media.mobile`
     flex-direction: column;
     row-gap: 2px;
  `}
`;

const HeaderMenu = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-left: 25px;
  ${({ theme }) => theme.media.mobile`
     margin-left: 0px;
  `}
`;

const HeaderAnchor = styled.a`
  border-right: 1px solid #f2f2f2;
  color: #f2f2f2;
  padding: 0px 25px;

  ${({ theme }) => theme.media.mobile`
     padding: 0px 15px;
     &:first-child {
      padding-left: 0px;
    }
  `}

  &:last-child {
    border-right: none;
  }
`;

const HeaderIcons = styled.div`
  color: #f2f2f2;
  display: flex;
  column-gap: 18px;
  & svg {
    margin: auto;
    stroke-width: 0;
  }
`;

const Logo = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #00bd2f;
`;

const Detail = styled.div`
  margin-top: 25px;
  color: #898989;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

const Wrapper = styled.div`
  margin: 0px auto;
  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `}
  ${({ theme }) => theme.media.mobile`
      width: 350px;
  `}
`;
