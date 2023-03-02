import styled from 'styled-components';
import PropTypes from 'prop-types';
import JobBookmarkIcon from '@/components/icons/JobBookmarkIcon';
import DefaultThumbnail from '@/assets/default_thumbnail.png';

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 190px; */
  aspect-ratio: 5/3.8;
`;

const ThumbnailImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  /* object-fit: contain; */
  border-radius: 10px;
  margin: 0px auto;
`;

const BookmarkButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 16px;
  margin-right: 10px;
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
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  isThumbnail: PropTypes.bool.isRequired,
};
