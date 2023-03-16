import styled from 'styled-components';

import { useJobOfferDetail } from '@/query/offer';
import { Offer } from '@/service/offer';
import JobDetailHeader from './jobDetailHeader';
import PostTag from './PostTag';

const Wrapper = styled.div`
  padding: 30px 2px 30px 45px;
`;

const Content = styled.div`
  & img {
    max-width: 100%;
    margin: 10px 0px;
  }
`;

const PostText = styled.div`
  padding-right: 25px;
  font-weight: 500;
  font-size: 16px;
`;

const SubTitle = styled.div`
  padding-top: 10px;
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  color: #101c33;
  margin-bottom: 20px;
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

/** @param {{offer: Offer}} */
export default function JobDetailContent({ offer }) {
  const { data } = useJobOfferDetail(offer.id);

  return (
    <Wrapper>
      <JobDetailHeader
        title={offer.title}
        status={offer.isClosed}
        date={offer.rawDateTime}
        views={offer.viewCount}
      />
      {/* <PostImg referrerPolicy="no-referrer" src={imgLink} /> */}
      <Content>
        <PostText
          dangerouslySetInnerHTML={{
            __html: data.content,
          }}
        />
      </Content>
      <SubTitle>태그</SubTitle>
      <PostTags>
        {data.tags?.map((items) => (
          <PostTag key={items} tag={items}>
            {items}
          </PostTag>
        ))}
      </PostTags>
    </Wrapper>
  );
}
