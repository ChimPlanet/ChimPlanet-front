import { styled, useScreenType } from '@chimplanet/ui';
import { CafeIcon, DetailBookMark, ShareIcon } from '@common/icons';
import { useState } from 'react';
import { useArticle } from '.';
import { useArticleContext } from './context';

const defaultImage =
  'https://images-ext-2.discordapp.net/external/NubY254DitZhl4T3xlPsSwQrnlIvVacwb87LmSn0xq0/%3Ftype%3Df100_100/https/ssl.pstatic.net/static/cafe/cafe_pc/default/cafe_profile_77.png?width=154&height=154';

export const Menubar = ({ id }) => {
  const [, { close }] = useArticle();
  const { profileImageURL, writer } = useArticleContext();
  const screenType = useScreenType();
  const [imageLoadedError, setImageLoadedError] = useState(false);

  const handleCopyClipBoard = () => {
    navigator.clipboard
      .writeText(window.location.origin + `/?a=${id}`)
      .then(() => alert('링크가 복사되었습니다.'));
  };

  const handleClick = (e) => {
    e.stopPropagation();
    // onBookmarkClick();
  };

  const handleImageLoadedError = () => setImageLoadedError(true);
  // TODO: 북마크 기능
  return (
    <Container display={screenType}>
      <Item>
        <Profile
          referrerPolicy="no-referrer"
          src={!imageLoadedError ? profileImageURL + '?type=f100_100' : defaultImage}
          alt={profileImageURL}
          onError={handleImageLoadedError}
        />
      </Item>
      <IconText>{writer}</IconText>
      <a href={`https://cafe.naver.com/steamindiegame/${id}`} target="_blank">
        <Item>
          <CafeIcon />
        </Item>
        <IconText>원문</IconText>
      </a>
      <div onClick={handleClick}>
        <Item>
          <DetailBookMark filled={true} />
        </Item>
        <IconText>북마크</IconText>
      </div>
      <div onClick={handleCopyClipBoard}>
        <Item>
          <ShareIcon />
        </Item>
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

const Profile = styled.img`
  height: 46px;
  width: 46px;
  border-radius: 50%;
  overflow: hidden;
`;

const Item = styled.div`
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
