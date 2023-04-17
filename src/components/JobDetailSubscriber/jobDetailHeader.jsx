import styled from 'styled-components';

export default function JobDetailHeader({ title, status, date, views }) {
  return (
    <HeaderContainer>
      <PostTitle>{title}</PostTitle>
      <PostInfo>
        <PostStatus>{status === 'END' ? '마감' : '구인 중'}</PostStatus>
        <PostDate>{date}</PostDate>
        <PostViews>조회 {views}</PostViews>
      </PostInfo>
    </HeaderContainer>
  );
}

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
  color: ${({ theme }) => theme.colors.main};
`;

const PostStatus = styled.div`
  border: 1px solid #ed2040;
  border-radius: 4px;
  font-size: 12px;
  line-height: 14px;
  margin-right: 10px;
  padding: 3px 12px 2px 13px;
  color: #ed2040;
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

const PostViews = styled.div``;
