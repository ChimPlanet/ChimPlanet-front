import { usePopularJobOffer } from '@/query/job';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLayoutEffect, useMemo } from 'react';
import JobOffer from '@/components/JobOffer';
import { translateJobItem } from '@/utils/job';

const Container = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  gap: 20px;
`;

/**
 * @param {{page: number, perPage: number, setLength(length: number): void}}
 * @returns
 */
export default function JobOfferSectionContent({ page, perPage, setLength }) {
  const { data: offers } = usePopularJobOffer();

  useLayoutEffect(() => {
    if (Array.isArray(offers)) setLength(offers.length);
  }, [offers]);

  const jobs = useMemo(() => {
    return offers
      .slice((page - 1) * perPage, Math.min(page * perPage, offers.length))
      .map(translateJobItem);
  }, [offers, page, perPage]);

  return (
    <Container column={perPage}>
      {jobs.map((offer, index) => (
        <JobOffer
          key={offer.boardId}
          id={offer.boardId}
          title={offer.title}
          writer={offer.writer}
          writeAt={offer.regDate}
          thumbnailUrl="https://cafeptthumb-phinf.pstatic.net/MjAyMzAyMDhfMTI1/MDAxNjc1ODY1OTk1MjUx.APGGjNqh9LS6w7tSLOcMAxn6_gAlP6INceA8x2q50Pog.xW5jRHAnSA2q_i7KN7to7wWTZKQPW3s3nk823D8u614g.JPEG/0001.jpg?type=w1600"
          viewCount={offer.viewCount}
          isBookmarked={false}
          isClosed={offer.endStr}
          style={{
            width: 250,
          }}
        />
      ))}
    </Container>
  );
}

JobOfferSectionContent.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
};
