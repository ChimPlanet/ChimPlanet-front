import { styled, useScreenType } from 'chimplanet-ui';
import {
  ShareIcon,
  DetailBookMark,
  CafeIcon,
} from '@/common/icons';

export default function JobDetailMenuBar({
  id,
  writer,
  userProfile,
  isBookmarked = false,
  onBookmarkClick,
}) {
  const sizeType = useScreenType();

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

  return (
    <Container display={sizeType}>
      <MenuContainer>
        <IconContainer>
          <Profile>
            <img referrerpolicy="no-referrer" src={userProfile+'?type=f100_100'} alt={userProfile} />
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
          <DetailBookMark filled={isBookmarked} />
        </IconContainer>
        <IconText>북마크</IconText>
      </div>
      <div
        onClick={() => {
          handleCopyClipBoard(window.location.origin + `/job/?id=${id}`);
        }}
      >
        <IconContainer>
          <ShareIcon />
        </IconContainer>
        <IconText>공유하기</IconText>
      </div>
    </Container>
  );
}

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
  background: #ffffff;
  background: ${({ theme }) => theme.backgroundColor.modal};

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
