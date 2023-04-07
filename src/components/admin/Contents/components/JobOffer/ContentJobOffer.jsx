import styled from "styled-components";
import ContnetJobTypography from "./ContentJobTypography";
import ContentJobStatusIndicator from "./ContentJobStatusIndicator";
import ContentJobOfferThumbnail from "./ContentJobOfferThumbnail";

export default function ContentJobOffer({
    id,
    title,
    thumbnailURL,
    isThumbnail,
    viewCount,
    writeAt,
    isClosed,
    isRegular,
    writer = '침플래닛',
    isBookmarked = false,
    onBookmarkClick,
    ...props
}) {

    return(
        <Container {...props}>
            <ContentJobOfferThumbnail 
                src={thumbnailURL}
                alt={title}
                isThumbnail={isThumbnail}
                isBookmarked={isBookmarked}
                onBookmarkClick={onBookmarkClick}
            />
            <ContentJobStatusIndicator isRegular={isRegular} isClosed={isClosed} />
            <ContnetJobTypography
                writer={writer}
                writeAt={writeAt}
                viewCount={viewCount}
                title={title}
            />
        </Container>
    );
};

const Container = styled.div`
  transform: translateY(0px);
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;
