import { styled, useScreenType } from '@chimplanet/ui';
import { useMemo } from 'react';

import JobDetailHeader from './jobDetailHeader';

import PurifyHtml from '@common/components/PurifyHtml';
import { useArticleContext } from './context';
import {
  adaptImageClickListener,
  adaptImagesNoRefererPolicy,
  adaptJavascriptData,
  getAllImgElementsFromDom,
  stringToDom,
} from './util';

interface Props {
  setFocusedImageSrc: (src: string) => void;
}

export default function JobDetailContent({ setFocusedImageSrc }: Props) {
  const data = useArticleContext();
  const screenType = useScreenType();

  const { title, isClosed, view, date } = data;

  const handleImageClick = (e: HTMLImageElement) => setFocusedImageSrc(e.src);

  const content = useMemo(() => {
    if (!data.content) return '';

    const dom = stringToDom(data.content);
    const images = getAllImgElementsFromDom(dom.body);
    //removeHeader(dom);
    adaptJavascriptData(dom.body);
    adaptImagesNoRefererPolicy(images);
    return dom.documentElement.outerHTML;
  }, [data]);

  return (
    <Wrapper screenType={screenType}>
      <JobDetailHeader title={title} status={isClosed} date={date} views={view} />
      <Content data-desktop={screenType === 'desktop'}>
        <PurifyHtml
          html={content}
          onLoad={(e) => {
            const images = getAllImgElementsFromDom(e);
            adaptImageClickListener(images, handleImageClick);
          }}
        />
      </Content>
      <SubTitle>태그</SubTitle>
      <PostTags>{data.tags?.map((t) => <Tag key={t}>{'# ' + t}</Tag>)}</PostTags>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ screenType: string }>`
  margin-top: ${(p) => (p.screenType === 'desktop' ? '' : '43px')};
  padding: ${(p) => (p.screenType === 'mobile' ? '20px 10px 70px 20px' : '30px 2px 30px 45px')};
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
