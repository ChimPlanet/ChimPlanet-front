import { styled } from 'chimplanet-ui';

export default function JobDetailHeader({ title, status, date, views }) {
  return (
    <HeaderContainer>
      <PostTitle>{title}</PostTitle>
      <PostInfo>
        <PostStatus end={status}>{status ? '마감' : '구인 중'}</PostStatus>
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
  padding-right: 45px;
  color: ${({ theme }) => theme.textColors.primary};
`;

const PostStatus = styled.div(({ theme, end }) => ({
  borderRadius: '4px',
  fontSize: '12px',
  lineHeight: '14px',
  marginRight: '10px',
  padding: '3px 12px 2px 13px',
  borderStyle: 'solid',
  borderWidth: 1,
  borderColor: theme.specialColors[end ? 'negative' : 'positive'],
  color: theme.specialColors[end ? 'negative' : 'positive'],
}));

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
