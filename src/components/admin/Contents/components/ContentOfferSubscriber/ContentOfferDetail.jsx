import styled from 'styled-components';
import { useJobOfferDetail } from '@/query/offer';
import { Offer } from '@/service/offer';
import ContentOfferHeader from './ContentOfferHeader';
import { useMemo } from 'react';
import {
  stringToDom,
  getAllImgElementsFromDom,
  adaptImagesNoRefererPolicy,
} from './util';

export default function ContentOfferDetail({ offer }) {

  const { data } = useJobOfferDetail(offer.articleId);

  /** @param {{offer: Offer}} */
  const content = useMemo(() => {
    const dom = stringToDom(data.content);
    adaptImagesNoRefererPolicy(getAllImgElementsFromDom(dom));
    return dom.documentElement.outerHTML;
  }, [data]);

  return (
    <Wrapper>
      <ContentOfferHeader
        title={offer.boardTitle}
        status={offer.isEnd}
        date={offer.regDate}
        views={offer.readCount}
      />
      <Content>
        <PostText
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </Content>
      <SubTitle>태그</SubTitle>
      <PostTags>
        {offer.boardTags?.map((items) => (
          <Tag key={items} tag={items}>
            {items}
          </Tag>
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

const Tag = styled.div`
  padding: 5px 19px;
  border: 1px solid #dbdee2;
  border-radius: 100px;
  margin-right: 8px;
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #8e94a0;
`;

