import styled from 'styled-components';
import PropTypes from 'prop-types';
import JobTypography from './jobTypography';
import JobStatusIndicator from './jobStatusIndicator';
import JobOfferThumbnail from './jobOfferThumbnail';

const Container = styled.div``;

/**
 * @typedef {object} JobOfferProps
 * @property {number} id
 * @property {string} thumbnailUrl
 * @property {string} title
 * @property {number} viewCount
 * @property {string} writeAt
 * @property {string} writer
 * @property {boolean} isClosed
 * @property {boolean} isCreate
 * @property {boolean} isRegular
 * @property {boolean} isBookmarked
 * @property {()=>void} onBookmarkClick
 *
 * @param {JobOfferProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>}
 */
export default function JobOffer({
  id,
  title,
  thumbnailUrl,
  viewCount,
  writeAt,
  isClosed,
  isCreate,
  isRegular,
  writer = '침플래닛',
  isBookmarked = false,
  onBookmarkClick,
  ...props
}) {
  return (
    <Container {...props}>
      <JobOfferThumbnail
        src={thumbnailUrl}
        alt={title}
        isBookmarked={isBookmarked}
        onBookmarkClick={onBookmarkClick}
      />
      <JobStatusIndicator
        isCreate={isCreate}
        isRegular={isRegular}
        isClosed={isClosed}
      />
      <JobTypography
        writer={writer}
        writeAt={writeAt}
        viewCount={viewCount}
        title={title}
      />
    </Container>
  );
}

JobOffer.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  viewCount: PropTypes.number.isRequired,
  writeAt: PropTypes.string.isRequired,
  isClosed: PropTypes.bool.isRequired,
  writer: PropTypes.string,
  isBookmarked: PropTypes.bool,
  isCreate: PropTypes.bool,
  isRegular: PropTypes.bool,
  onBookmarkClick: PropTypes.func.isRequired,
};
