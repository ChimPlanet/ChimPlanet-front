import styled from "styled-components";

const HeaderContainer = styled.header`
    margin-bottom: 21px;
    font-size: 14px;
    line-height: 17px;
    color: #666666;
`;

const PostTitle = styled.div`
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    margin-bottom: 8px;
    color: #000000;
`;

const PostStatus = styled.div`
    border: 1px solid #ED2040;
    border-radius: 4px;
    font-size: 12px;
    line-height: 14px;
    margin-right: 10px;
    padding: 3px 12px 2px 13px;
    color: #ED2040;
`;

const PostInfo = styled.div`
    display: flex;
`;

const PostDate = styled.div`
    margin-right: 8px;
`;

const PostTime = styled.div`
    margin-right: 8px;
`;

const PostViews = styled.div`

`;

export default function DetailPostHeader({status}) {
    return(
        <HeaderContainer>
            <PostTitle>
                [팀 창설][침플래닛] 인력사무소 모아보기 사이트 개발 인력 모집합니다
            </PostTitle>
            <PostInfo>
                {status.map(items=> <PostStatus key={items}>{items}</PostStatus>)}
                <PostDate>2023.02.16</PostDate>
                <PostTime>17:01</PostTime>
                <PostViews>조회 433</PostViews>
            </PostInfo>
        </HeaderContainer>
    )
}