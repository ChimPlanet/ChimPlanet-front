import styled from 'styled-components';
import PropTypes from 'prop-types';
import JobBookmarkIcon from '@/components/icons/JobBookmarkIcon';

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  aspect-ratio: 5/3.8;
`;

const ThumbnailImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const BookmarkButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 1em;
  margin-right: 1em;

  & svg {
    fill: ${({ color }) => color};
  }
`;

/**
 * @typedef {object} JobOfferThumbnailProps
 * @property {string} src
 * @property {string} alt
 * @property {boolean} isBookmarked
 * @property {()=>void} onBookmarkClick
 *
 * @param {JobOfferThumbnailProps}
 * @returns
 */
export default function JobOfferThumbnail({
  src,
  alt,
  isBookmarked,
  onBookmarkClick,
}) {
  return (
    <Container>
      <ThumbnailImage src={src} alt={alt} />
      <BookmarkButton
        color={isBookmarked ? '#00BD2F' : '#fff'}
        onClick={onBookmarkClick}
      >
        <JobBookmarkIcon filled={isBookmarked} />
      </BookmarkButton>
    </Container>
  );
}

JobOfferThumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
};
