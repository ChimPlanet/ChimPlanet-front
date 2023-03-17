import styled from 'styled-components';

import { useJobOfferDetail } from '@/query/offer';
import { Offer } from '@/service/offer';
import JobDetailHeader from './jobDetailHeader';
import PostTag from './PostTag';

import { useMemo } from 'react';
import {
  stringToDom,
  getAllImgElementsFromDom,
  adaptImagesNoRefererPolicy,
} from './util';

/** @param {{offer: Offer}} */
export default function JobDetailContent({ offer }) {
  const { data } = useJobOfferDetail(offer.id);

  const content = useMemo(() => {
    const dom = stringToDom(data.content);
    adaptImagesNoRefererPolicy(getAllImgElementsFromDom(dom));
    return dom.documentElement.outerHTML;
  }, [data]);

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
            __html: content,
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

const Wrapper = styled.div`
  padding: 30px 2px 30px 45px;
`;

const Content = styled.div`
  & img {
    position: relative;
    max-width: 100%;
    margin: 10px 0px;
  }
  & img:hover {
    z-index: 10000;
    transform: scale(1.3) translateX(30px);
    cursor: zoom-in;
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
