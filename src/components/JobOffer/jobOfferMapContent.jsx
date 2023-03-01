import JobOffer from '@/components/JobOffer';
/**
 * @param {{jobs: import("@/utils/job").JobOfferVO[]}}
 */
export default function JobOfferMapContent({ jobs }) {
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
          isBookmarked={false}
          isClosed={offer.isClosed}
          isCreate={offer.isCreate}
          isRegular={offer.isRegular}
          style={{
            width: 250,
          }}
        />
      ))}
    </>
  );
}
