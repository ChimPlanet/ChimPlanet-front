import styled from "styled-components";
import CafaIcon from "../icons/CafaIcon";
import DetailBookMark from "../icons/DetailBookMark";
import ShareIcon from "../icons/ShareIcon";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const IconContainer = styled.div`
    display: flex;
    width: 46px;
    height: 46px;
    background: #FFFFFF;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

const IconText = styled.div`
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
    margin-bottom: 16px;
`;

export default function DetailMenuBar({originalURL, id}) {

    const handleCopyClipBoard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          alert('클립보드에 링크가 복사되었습니다.');
        } catch (e) {
          alert('복사에 실패하였습니다');
        };
    };

    return(
        <Container>
            <a href={originalURL} target="_blank">
                <IconContainer>
                    <CafaIcon/>
                </IconContainer>
                <IconText>
                    원문
                </IconText>
            </a>
            <div>
                <IconContainer>
                    <DetailBookMark/>
                </IconContainer>
                <IconText>
                    북마크
                </IconText>
            </div>
            <div onClick={()=>{handleCopyClipBoard(document.location.href +`?id=${id}`)}}>
                <IconContainer>
                    <ShareIcon/>
                </IconContainer>
                <IconText>
                    공유하기
                </IconText>
            </div>
        </Container>
    );
}