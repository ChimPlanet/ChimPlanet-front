import {
  JobOfferMapContent,
  Loading,
  styled,
  useScreenType,
} from '@chimplanet/ui';
import { useEffect, useMemo, useRef } from 'react';

import { useArticle } from '@components/ArticleRenderer/hook';
import useBookmark from '@hooks/useBookmark';

export default function JobInfiniteScroll({ List, getMoreItem, last }) {
  const target = useRef();

  const screenType = useScreenType();

  const { toggle, is } = useBookmark();
  const [, { open }] = useArticle();

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      //observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  const config = useMemo(() => OfferConfig[screenType], [screenType]);

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
      <JobOfferContainer column={config.numOfColumn}>
        <JobOfferMapContent
          jobs={List}
          offerWidth={config.width}
          direction={config.direction}
          onBookmarkClick={toggle}
          onClick={open}
          isBookmarked={is}
        />
      </JobOfferContainer>
      <Margin>
        {!last && (
          <div ref={target}>
            <Loading />
          </div>
        )}
        {last && <div></div>}
      </Margin>
    </>
  );
}

const OfferConfig = {
  desktop: {
    numOfColumn: 4,
    width: 250,
    direction: 'column',
  },
  tablet: {
    numOfColumn: 3,
    width: 220,
    direction: 'column',
  },
  mobile: {
    numOfColumn: 2,
    width: 160,
    direction: 'column',
  },
};

const Margin = styled.div`
  margin: 20px 0;
`;

const JobOfferContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  justify-items: center;
  gap: 20px;
`;
