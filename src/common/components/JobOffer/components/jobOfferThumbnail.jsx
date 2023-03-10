import styled from 'styled-components';
import PropTypes from 'prop-types';

import { JobBookmarkIcon } from '@/common/icons';
import DefaultThumbnail from '@/assets/default_thumbnail.png';

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 250px;
`;

const ThumbnailImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 250px;
  height: 250px;
  border-radius: 8px;
  margin: 0px auto;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const BookmarkButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 18px;
  margin-right: 18px;
`;

/**
 * @typedef {object} JobOfferThumbnailProps
 * @property {string} src
 * @property {string} alt
 * @property {boolean} isBookmarked
 * @property {boolean} isThumbnail
 * @property {()=>void} onBookmarkClick
 *
 * @param {JobOfferThumbnailProps}
 * @returns
 */
export default function JobOfferThumbnail({
  src,
  alt,
  isThumbnail,
  isBookmarked,
  onBookmarkClick,
}) {
  return (
    <Container>
      <ThumbnailImage
        referrerPolicy="no-referrer"
        src={isThumbnail ? src : DefaultThumbnail}
        alt={alt}
      />
      <BookmarkButton onClick={onBookmarkClick}>
        <JobBookmarkIcon filled={isBookmarked} />
      </BookmarkButton>
    </Container>
  );
}

JobOfferThumbnail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  isThumbnail: PropTypes.bool.isRequired,
};
