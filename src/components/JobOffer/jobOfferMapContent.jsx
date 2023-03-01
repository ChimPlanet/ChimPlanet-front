import JobOffer from '@/components/JobOffer';
import { BookmarkContext } from '@/utils/Context/bookmarkContext';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import useBookmark from '@/hooks/useBookmark';

/**
 * @param {{jobs: import("@/utils/job").JobOfferVO[], toggleBookmark(id: number):void}}
 */

export default function JobOfferMapContent({ jobs }) {
  const { toggle } = useBookmark();
  const bookmarkSet = BookmarkContext.getInstance().getBookmarkSet();
  return (
    <>
      {jobs.map((offer) => (
        <JobOffer
          key={offer.boardId}
          id={offer.boardId}
          title={offer.title}
          writer={offer.writer}
          writeAt={offer.regDate}
          thumbnailUrl="https://cafeptthumb-phinf.pstatic.net/MjAyMzAyMDhfMTI1/MDAxNjc1ODY1OTk1MjUx.APGGjNqh9LS6w7tSLOcMAxn6_gAlP6INceA8x2q50Pog.xW5jRHAnSA2q_i7KN7to7wWTZKQPW3s3nk823D8u614g.JPEG/0001.jpg?type=w1600"
          viewCount={offer.viewCount}
          isBookmarked={bookmarkSet.has(offer.boardId)}
          isClosed={offer.isClosed}
          isCreate={offer.isCreate}
          isRegular={offer.isRegular}
          onBookmarkClick={() => toggle(offer.boardId)}
          style={{
            width: 250,
          }}
        />
      ))}
    </>
  );
}

JobOfferMapContent.propTypes = {
  jobs: PropTypes.array,
};
