import { useMemo } from 'react';
import styled from 'styled-components';
import { useSizeType } from '@/context/sizeTypeContext';
import { JobOffer } from '@/common/components/JobOffer';
import { BookmarkContext } from '@/utils/Context/bookmarkContext';
import useBookmark from '@/hooks/useBookmark';
import { useArticleContext } from '@/context/articleContext';

const JobOfferContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  justify-items: center;
  gap: 20px;
  row-gap: 70px;
`;

export default function JobInfiniteScroll({ List }) {
  const [, { open }] = useArticleContext();
  const sizeType = useSizeType();
  const pageCount = useMemo(() => (sizeType === 'desktop' ? 4 : 3), [sizeType]);
  const { toggle } = useBookmark();
  const bookmarkSet = BookmarkContext.getInstance().getBookmarkSet();

  return (
    <>
      <JobOfferContainer column={pageCount}>
        {List.map((item) => (
          <JobOffer
            onClick={() => open(+item.articleId)}
            key={item.articleId}
            id={+item.articleId}
            title={item.boardTitle}
            isRegular={false}
            writer={item.writer}
            writeAt={item.regDate}
            isThumbnail={false}
            thumbnailURL={item.thumbnailURL}
            viewCount={+item.readCount.replace(',', '')}
            isClosed={item.isEnd === 'ING' ? false : true}
            isBookmarked={bookmarkSet.has(item.articleId)}
            onBookmarkClick={() => toggle(item.articleId)}
            style={{
              width: 250,
            }}
          />
        ))}
      </JobOfferContainer>
    </>
  );
}
