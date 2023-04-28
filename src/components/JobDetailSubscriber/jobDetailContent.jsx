import { styled, useScreenType } from 'chimplanet-ui';

import { useJobOfferDetail } from '@/query/offer';
import { Offer } from '@/service/offer';
import JobDetailHeader from './jobDetailHeader';

import { useMemo } from 'react';
import {
  stringToDom,
  getAllImgElementsFromDom,
  adaptImagesNoRefererPolicy,
} from './util';

/** @param {{offer: Offer}} */
export default function JobDetailContent({ offer }) {
  const { data } = useJobOfferDetail(offer.id);

  const sizeType = useScreenType();

  const content = useMemo(() => {
    const dom = stringToDom(data.content);
    adaptImagesNoRefererPolicy(getAllImgElementsFromDom(dom));
    return dom.documentElement.outerHTML;
  }, [data]);

  return (
    <Wrapper sizeType={sizeType}>
      <JobDetailHeader
        title={offer.title}
        status={offer.isClosed}
        date={data.data.regDate}
        views={offer.viewCount}
      />
      {/* <PostImg referrerPolicy="no-referrer" src={imgLink} /> */}
      <Content data-desktop={sizeType === 'desktop'}>
        <PostText
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </Content>
      <SubTitle>태그</SubTitle>
      <PostTags>
        {data.tags?.map((items) => (
          <Tag key={items.tagObjResponseDto.tagName}>
            {'# ' + items.tagObjResponseDto.tagName}
          </Tag>
        ))}
      </PostTags>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: ${({ sizeType }) => (sizeType === 'desktop' ? '' : '43px')};
  padding: ${({ sizeType }) =>
    sizeType === 'mobile' ? '20px 10px 70px 20px' : '30px 2px 30px 45px'};
  color: ${({ theme }) => theme.colors.main};
`;

const Content = styled.div`
  & img {
    position: relative;
    max-width: 100%;
    margin: 10px 0px;
  }
  &[data-desktop='true'] img:hover {
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
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.main};
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
