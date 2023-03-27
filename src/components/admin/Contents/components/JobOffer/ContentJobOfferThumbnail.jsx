import styled from 'styled-components';
import { JobBookmarkIcon } from '@/common/icons';
import DefaultThumbnail from '@/assets/default_thumbnail.png';

export default function ContentJobOfferThumbnail({
  src,
  alt,
  isThumbnail,
  isBookmarked,
  onBookmarkClick,
}) {

  const handleClick = (e) => {
    e.stopPropagation();
    onBookmarkClick();
  };

  return (
    <Container>
      <ThumbnailImage
        referrerPolicy="no-referrer"
        src={isThumbnail ? src : DefaultThumbnail}
        alt={alt}
      />
      <BookmarkButton onClick={handleClick}>
        <JobBookmarkIcon filled={isBookmarked} />
      </BookmarkButton>
    </Container>
  );
};

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
