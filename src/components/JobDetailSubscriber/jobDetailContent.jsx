import { styled, useScreenType } from 'chimplanet-ui';

import { useJobOfferDetail } from '@/query/offer';
import { Offer } from '@/service/offer';
import JobDetailHeader from './jobDetailHeader';

import { useMemo, useEffect } from 'react';
import {
  stringToDom,
  getAllImgElementsFromDom,
  adaptImagesNoRefererPolicy,
  removeHeader,
  adaptJavascriptData,
} from './util';

/** @param {{offer: Offer}} */
export default function JobDetailContent({ offer, handelProfile }) {
  const { data } = useJobOfferDetail(offer.id);

  const sizeType = useScreenType();

  useEffect(() => {
    handelProfile(data.profileImageUrl);
  }, [data]);

  const content = useMemo(() => {
    const dom = stringToDom(data.content);
    removeHeader(dom);
    adaptJavascriptData(dom);
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
  color: ${({ theme }) => theme.textColors.primary};
`;

const Content = styled.div`
  & img {
    position: relative;
    max-width: 100%;
    margin: 10px 0px;
  }
`;

const PostText = styled.div`
  padding-right: 45px;
  font-weight: 500;
  font-size: 16px;
`;

const SubTitle = styled.div`
  padding-top: 10px;
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textColors.primary};
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  padding: 5px 19px;
  border: ${({ theme }) => `1px solid ${theme.borderColors.quinary}`};
  color: ${({ theme }) => `1px solid ${theme.borderColors.quinary}`};
  border-radius: 100px;
  margin-right: 8px;
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;
