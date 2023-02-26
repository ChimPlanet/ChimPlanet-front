import styled from "styled-components";
import CafaIcon from "../icons/CafaIcon";
import DetailBookMark from "../icons/DetailBookMark";
import ShareIcon from "../icons/ShareIcon";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

export default function DetailMenuBar() {
    return(
        <Container>
            <IconContainer>
                <CafaIcon/>
            </IconContainer>
            <IconText>
                원문
            </IconText>
            <IconContainer>
                <DetailBookMark/>
            </IconContainer>
            <IconText>
                북마크
            </IconText>
            <IconContainer>
                <ShareIcon/>
            </IconContainer>
            <IconText>
                공유하기
            </IconText>
        </Container>
    );
}