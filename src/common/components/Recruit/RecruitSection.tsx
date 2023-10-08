import {
  JobOfferMapContent,
  Recruit,
  styled,
  useRecruitContextState,
  useScreenType,
} from '@chimplanet/ui';
import { SectionLeftIcon, SectionRightIcon } from '@common/icons';
import { useArticle } from '@components';
import useBookmark from '@hooks/useBookmark';
import { Offer, parseUIOffer } from '@services/entity';
import { ComponentProps, Fragment, Suspense, useMemo } from 'react';
import { RecruitData } from './RecruitData';

export const RecruitSection = () => {
  return (
    <Recruit>
      <Recruit.Header title={<h1>공식 콘텐츠 구인글</h1>} renderControl={renderControl} />
      <Suspense>
        <RecruitData payload={{ type: 'popular' }}>
          {(items) => <RecruitContent items={items} />}
        </RecruitData>
      </Suspense>
    </Recruit>
  );
};

interface RecruitContentProps {
  items: Offer[];
}
export const RecruitContent = ({ items }: RecruitContentProps) => {
  const [, { open }] = useArticle();
  const { toggle, is } = useBookmark();
  const screenType = useScreenType();
  const { cursor } = useRecruitContextState();

  const layoutConfig = useMemo(
    () => OfferLayoutConfig[screenType as keyof typeof OfferLayoutConfig],
    [screenType],
  );

  return (
    <Outer>
      <Inner
        moveX={-cursor * ((layoutConfig.width as number) + layoutConfig.columnGap)}
        gap={layoutConfig.columnGap}
        vertical={screenType === 'mobile'}
      >
        <JobOfferMapContent
          offerWidth={layoutConfig.width}
          offers={items.map((e) => parseUIOffer(e, is))}
          onClick={(offer) => open(offer.id)}
          onBookmarkClick={(offer) => toggle(offer.id)}
          rowLayoutConfig={defaultRowLayoutConfig}
        />
      </Inner>
    </Outer>
  );
};

const Outer = styled.div`
  overflow-x: hidden;
`;

const Inner = styled.div<{ vertical: boolean; gap: number; moveX: number }>`
  margin-top: 20px;
  display: flex;
  flex-direction: ${(p) => (!p.vertical ? 'row' : 'column')};
  gap: ${(p) => `${p.gap}px`};
  width: fit-content;
  transform: ${(p) => `translate3d(${p.moveX}px, 0px, 0px)`};
  transition: transform 0.2s ease-in-out;
`;

const OfferLayoutConfig = {
  desktop: {
    columnGap: 20,
    width: 250,
  },
  tablet: {
    columnGap: 25,
    width: 220,
  },
  mobile: {
    columnGap: 20,
    width: '100%',
  },
};

const defaultRowLayoutConfig = {
  height: 120,
  gap: 20,
};

const renderControl: ComponentProps<typeof Recruit.Header>['renderControl'] = ({
  isNext,
  isPrev,
  nextPage,
  prevPage,
}) => (
  <Fragment>
    <button onClick={prevPage} disabled={!isPrev}>
      <SectionLeftIcon />
    </button>
    <button onClick={nextPage} disabled={!isNext}>
      <SectionRightIcon />
    </button>
  </Fragment>
);
