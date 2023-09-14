import { styled, useScreenType } from '@chimplanet/ui';
import { CafeIcon, DetailBookMark, ShareIcon } from '@common/icons';
import { useState } from 'react';
import { useArticleContext } from './context';

const defaultImage =
  'https://images-ext-2.discordapp.net/external/NubY254DitZhl4T3xlPsSwQrnlIvVacwb87LmSn0xq0/%3Ftype%3Df100_100/https/ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png?width=154&height=154';

export const Menubar = ({ id }) => {
  const { data } = useArticleContext();
  const sizeType = useScreenType();
  const [imageError, setImageError] = useState(false);

  const { profileImageUrl, writer } = data;

  const handleCopyClipBoard = async (text) => {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('링크가 복사되었습니다.');
  };

  const handleClick = (e) => {
    e.stopPropagation();
    onBookmarkClick();
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // TODO: 북마크 기능
  return (
    <Container display={sizeType}>
      <MenuContainer>
        <IconContainer>
          <Profile>
            <img
              referrerPolicy="no-referrer"
              src={
                !imageError ? profileImageUrl + '?type=f100_100' : defaultImage
              }
              alt={profileImageUrl}
              onError={handleImageError}
            />
          </Profile>
        </IconContainer>
        <IconText>{writer}</IconText>
      </MenuContainer>
      <a href={`https://cafe.naver.com/steamindiegame/${id}`} target="_blank">
        <IconContainer>
          <CafeIcon />
        </IconContainer>
        <IconText>원문</IconText>
      </a>
      <div onClick={handleClick}>
        <IconContainer>
          <DetailBookMark filled={true} />
        </IconContainer>
        <IconText>북마크</IconText>
      </div>
      <div
        onClick={() => {
          handleCopyClipBoard(window.location.origin + `/?a=${id}`);
        }}
      >
        <IconContainer>
          <ShareIcon />
        </IconContainer>
        <IconText>공유하기</IconText>
      </div>
      <Rest onClick={close}></Rest>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  position: sticky;
  top: 20px;
  left: 0px;
  display: ${({ display }) => (display === 'desktop' ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const IconContainer = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  background: ${({ theme }) => theme.bgColors.primary};
  color: ${({ theme }) => theme.textColors.modalIcon};

  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const IconText = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  margin-bottom: 16px;
`;

const Rest = styled.div`
  width: 100%;
  height: 100%;
`;
