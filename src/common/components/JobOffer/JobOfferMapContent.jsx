import JobOffer from './JobOffer';
import { BookmarkContext } from '@/utils/Context/bookmarkContext';
import PropTypes from 'prop-types';
import useBookmark from '@/hooks/useBookmark';
import { useArticleContext } from '@/context/articleContext';

/**
 * @param {{jobs: import("@/utils/job").JobOfferVO[], toggleBookmark(id: number):void}}
 */

export default function JobOfferMapContent({ jobs }) {
  const [, { open }] = useArticleContext();
  const { toggle } = useBookmark();
  const bookmarkSet = BookmarkContext.getInstance().getBookmarkSet();
  return (
    <>
      {jobs.map((offer) => (
        <JobOffer
          onClick={() => open(offer.id)}
          key={offer.id}
          id={offer.id}
          thumbnailURL={offer.thumbnailURL}
          isThumbnail={offer.isThumbnail}
          title={offer.title}
          writer={offer.writer}
          writeAt={offer.regDate}
          redirectURL={offer.redirectURL}
          viewCount={offer.viewCount}
          isBookmarked={bookmarkSet.has(offer.id)}
          isClosed={offer.isClosed}
          isRegular={offer.isRegular}
          onBookmarkClick={() => toggle(offer.id)}
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
