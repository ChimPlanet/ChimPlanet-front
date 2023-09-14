import { styled } from '@chimplanet/ui';
import {
  LineIcon,
  MobileBookMarkIcon,
  MobileCafeIcon,
  MobileShareIcon,
} from '@common/icons';
import { Modal } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import { useState } from 'react';

const defaultImage =
  'https://images-ext-2.discordapp.net/external/NubY254DitZhl4T3xlPsSwQrnlIvVacwb87LmSn0xq0/%3Ftype%3Df100_100/https/ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png?width=154&height=154';

export default function JobDetailMobileMenuBar({
  modal,
  handleModal,
  userProfile,
  writer,
  id,
  isBookmarked,
  onBookmarkClick,
}) {
  const [imageError, setImageError] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    onBookmarkClick();
  };

  const handleCopyClipBoard = async (text) => {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('링크가 복사되었습니다.');
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Modal open={modal} onClose={handleModal}>
      <>
        <Container>
          <ContainerTab onClick={handleModal}>
            <LineIcon />
          </ContainerTab>
          <NavBar>
            <ItemList>
              <Item className="profile">
                <Profile>
                  <img
                    referrerpolicy="no-referrer"
                    src={
                      !imageError
                        ? userProfile + '?type=f100_100'
                        : defaultImage
                    }
                    alt={userProfile}
                    onError={handleImageError}
                  />
                </Profile>
                <p className="text">{writer}</p>
              </Item>
              <a
                href={`https://m.cafe.naver.com/steamindiegame/${id}`}
                target="_blank"
              >
                <Item>
                  <IconContainer>
                    <MobileCafeIcon />
                  </IconContainer>
                  <p className="text">원문으로 바로가기</p>
                </Item>
              </a>
              <Item onClick={handleClick}>
                <IconContainer>
                  <MobileBookMarkIcon filled={isBookmarked} />
                </IconContainer>
                <p className="text">북마크</p>
              </Item>
              <Item
                onClick={() => {
                  handleCopyClipBoard(
                    window.location.origin + `/job/?id=${id}`,
                  );
                }}
              >
                <IconContainer>
                  <MobileShareIcon />
                </IconContainer>
                <p className="text">공유하기</p>
              </Item>
            </ItemList>
          </NavBar>
        </Container>
      </>
    </Modal>
  );
}

const MenuModal = muiStyled(Modal)({
  position: 'absolute',
  bottom: '0',
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100vw;
  color: ${({ theme }) => theme.textColors.primary};
`;

const ContainerTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 100vw;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.bgColors.quaternary};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 300px;
  padding: 40px;
  background-color: ${({ theme }) => theme.bgColors.quaternary};
`;

const ItemList = styled.div``;

const Item = styled.div`
  display: flex;
  align-items: center;
  &.profile {
    margin-bottom: 20px;
  }
  .text {
    margin-left: 14px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
`;

const Profile = styled.div`
  display: flex;
  height: 46px;
  width: 46px;
  border-radius: 50%;
  overflow: hidden;
  justify-content: center;
  align-items: stretch;
`;
