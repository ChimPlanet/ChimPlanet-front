import { useMemo, useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import { useSizeType } from '@/context/sizeTypeContext';
import ContentMapJobOffer from '../JobOffer/ContentMapJobOffer';
import Loading from '@/common/components/Loading'

export default function ContnentsOfferSection({ jobs, getMoreItem, last }) {

    const target = useRef();

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

    const sizeType = useSizeType();
    const pageCount = useMemo(() => (sizeType === 'desktop' ? 4 : 3), [sizeType]);

    return(
        <Container>
          <JobOfferContainer column={pageCount} >
            <ContentMapJobOffer jobs={jobs}/>
          </JobOfferContainer>
          <div>
            {!last && <div ref={target}><Loading /></div>}
            {last && <div></div>}
          </div>
        </Container>
    );
};

const Container = styled.div`
    ${({ theme }) => theme.media.tablet`
    ${`max-width: ${theme.widths.tablet}px`};
  `};
`;

const JobOfferContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  justify-items: center;
  gap: 20px;
  row-gap: 70px;
`;

const Img = styled.div`
  position: relative;
`;