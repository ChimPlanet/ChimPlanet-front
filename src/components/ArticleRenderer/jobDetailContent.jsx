import { styled, useScreenType } from '@chimplanet/ui';
import { useMemo } from 'react';

import JobDetailHeader from './jobDetailHeader';

import PurifyHtml from '@common/components/PurifyHtml';
import { useArticleContext } from './context';
import { useArticle } from './hook';
import {
  adaptImageClickListener,
  adaptImagesNoRefererPolicy,
  adaptJavascriptData,
  getAllImgElementsFromDom,
  stringToDom,
} from './util';

export default function JobDetailContent({ setFocusedImageSrc, id }) {
  const [, { close }] = useArticle();
  const { data, isError } = useArticleContext();

  if (isError && errorHandler(id, close)) return <></>;

  const sizeType = useScreenType();
  const { title, isClosed, viewCount } = data;

  /** @param {HTMLImageElement} e */
  const handleImageClick = (e) => setFocusedImageSrc(e.src);

  const content = useMemo(() => {
    if (!data.content) return '';

    const dom = stringToDom(data.content);
    const images = getAllImgElementsFromDom(dom);
    //removeHeader(dom);
    adaptJavascriptData(dom);
    adaptImagesNoRefererPolicy(images);
    return dom.documentElement.outerHTML;
  }, [data]);

  return (
    <Wrapper sizeType={sizeType}>
      <JobDetailHeader
        title={title}
        status={isClosed}
        date={data.data.regDate}
        views={viewCount}
      />
      <Content data-desktop={sizeType === 'desktop'}>
        <PurifyHtml
          html={content}
          onLoad={(e) => {
            const images = getAllImgElementsFromDom(e);
            adaptImageClickListener(images, handleImageClick);
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

const errorHandler = (id, close) => {
  if (
    confirm('삭제되었거나 권한이 필요한 게시글입니다. 원문으로 보시겠습니까?')
  ) {
    window.open(`https://cafe.naver.com/steamindiegame/${id}`);
    close();
  }
  return true;
};

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
  padding-bottom: 110px;
  font-weight: 500;
  font-size: 16px;
  padding-right: 20px;

  &[data-desktop='true'] {
    padding-right: 40px;
  }
`;

const PostText = styled.div`
  padding-right: 45px;
  font-weight: 500;
  font-size: 16px;
`;

const SubTitle = styled.div`
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
