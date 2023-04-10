import { useMemo, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSizeType } from '@/context/sizeTypeContext';
import { JobOfferMapContent } from '@/common/components/JobOffer';
import Loading from '@/common/components/Loading'

export default function JobInfiniteScroll({ List, getMoreItem, last }) {

  const target = useRef();
  
  const sizeType = useSizeType();
  const pageCount = useMemo(() => (sizeType === 'desktop' ? 4 : 3), [sizeType]);

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      //observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

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
      <JobOfferContainer column={pageCount}>
        <JobOfferMapContent jobs={List} />
      </JobOfferContainer>
      <div>
        {!last && <div ref={target}><Loading /></div>}
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
