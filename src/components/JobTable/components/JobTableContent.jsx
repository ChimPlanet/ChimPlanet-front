import {
  JobOfferMapContent,
  Loading,
  ResizableGrid,
  useScreenType,
} from '@chimplanet/ui';
import { useMemo } from 'react';

import { useArticleContext } from '@/context/articleContext';
import useBookmark from '@/hooks/useBookmark';
import { useJobTableContext } from '../contexts/table';
import JobTableContentNotFound from './JobTableContentNotFound';

export function JobTableContent() {
  const [, { open }] = useArticleContext();
  const { toggle, is } = useBookmark();
  const [context] = useJobTableContext();
  const screenType = useScreenType();

  const config = useMemo(() => OfferConfig[screenType], [screenType]);

  return context.pending === 'done' ? (
    context.originalData.length > 0 ? (
      <ResizableGrid
        style={{ columnGap: config.gap, rowGap: config.rowGap }}
        calcNumberOfColumns={() => config.numOfColumn}
      >
        <JobOfferMapContent
          onClick={open}
          onBookmarkClick={toggle}
          isBookmarked={is}
          jobs={context.displayedData}
          offerWidth={config.width}
          direction={config.direction}
          rowLayoutConfig={config.rowConfig}
        />
      </ResizableGrid>
    ) : (
      <JobTableContentNotFound />
    )
  ) : (
    <Loading />
  );
}

export default JobTableContent;

const OfferConfig = {
  desktop: {
    numOfColumn: 4,
    width: 250,
    gap: 20,
    rowGap: 60,
    direction: 'column',
  },
  tablet: {
    numOfColumn: 3,
    width: 220,
    gap: 30,
    rowGap: 60,
    direction: 'column',
  },
  mobile: {
    numOfColumn: 2,
    width: 160,
    direction: 'column',
    gap: 30,
    rowGap: 40,
    /** @type {import('@chimplanet/ui/build/components/JobOffer/JobOffer').JobOfferProps['rowLayoutConfig']} */
    rowConfig: {
      height: 120,
      gap: 20,
    },
  },
};

/** @param {import('@chimplanet/ui').ScreenType} */
function calcColumns(screenType) {
  switch (screenType) {
    case 'desktop':
      return 4;
    case 'tablet':
      return 3;
    default:
      return 2;
  }
}
