import { useMemo, useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import { useSizeType } from '@/context/sizeTypeContext';
import ContentMapJobOffer from '../JobOffer/ContentMapJobOffer';

export default function ContnentsOfferSection({ jobs }) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [num, setNum] = useState(5);
    const target = useRef();

    useMemo(()=>{setData(jobs)},[jobs]);

    const getMoreItem = () => {
        if (data.length > num) {
          setNum((num) => num + 5);
          setIsLoading(false);
        };
    };

    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting) {
          await getMoreItem();
          observer.observe(entry.target);
        };
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
                <ContentMapJobOffer jobs={data.slice(0, num)}/>
            </JobOfferContainer>
            {isLoading && <div>로딩 중</div>}
            {!isLoading && !(data.length <= num) && <div ref={target}>s</div>}
            {data.length <= num && <div>게시물 끝</div>}
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