import styled from 'styled-components';
import CafeIcon from '@/common/icons/CafeIcon';
import DetailBookMark from '@/common/icons/DetailBookMark';
import ShareIcon from '@/common/icons/ShareIcon';

const Container = styled.div`
  margin-top: 20px;
  position: sticky;
  top: 20px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  width: 46px;
  height: 46px;
  background: #ffffff;
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

export default function JobDetailMenuBar({ id }) {
  const handleCopyClipBoard = async (text) => {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert("링크가 복사되었습니다.")
    /*     
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      console.log(e)
      alert('복사에 실패하였습니다');
    } 
    */
  };

  return (
    <Container>
      <a href={`https://cafe.naver.com/steamindiegame/${id}`} target="_blank">
        <IconContainer>
          <CafeIcon />
        </IconContainer>
        <IconText>원문</IconText>
      </a>
      <div>
        <IconContainer>
          <DetailBookMark />
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
