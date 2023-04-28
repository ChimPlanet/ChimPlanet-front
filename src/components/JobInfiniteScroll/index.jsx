import { useMemo, useRef, useEffect } from 'react';
import { styled, Loading, useScreenType } from 'chimplanet-ui';
import { JobOfferMapContent } from '@/common/components/JobOffer';

import { OfferColumnMap, OfferWidthMap } from '@/utils/offerSizeMap';

export default function JobInfiniteScroll({ List, getMoreItem, last }) {
  const target = useRef();

  const sizeType = useScreenType();

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      //observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  const config = useMemo(
    () => ({
      pageCount: OfferColumnMap[sizeType],
      offerWidth: OfferWidthMap[sizeType],
    }),
    [sizeType],
  );

  useEffect(() => {
    let observer;
    if (target.current) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target.current]);

  return (
    <>
      <JobOfferContainer column={config.pageCount}>
        <JobOfferMapContent jobs={List} offerWidth={config.offerWidth} />
      </JobOfferContainer>
      <div>
        {!last && (
          <div ref={target}>
            <Loading />
          </div>
        )}
        {last && <div></div>}
      </div>
    </>
  );
}

const JobOfferContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  justify-items: center;
  gap: 20px;
  row-gap: 70px;
`;
