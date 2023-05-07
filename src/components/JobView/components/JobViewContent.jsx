import { useMemo } from 'react';
import {
  JobOfferMapContent,
  Loading,
  ResizableGrid,
  useScreenType,
} from 'chimplanet-ui';

import { useJobViewContext } from '../JobViewContext';
import { useArticleContext } from '@/context/articleContext';
import useBookmark from '@/hooks/useBookmark';
import JobViewContentNotFound from './JobViewContentNotFound';

export default function JobViewContent() {
  const [, { open }] = useArticleContext();
  const { toggle, is } = useBookmark();
  const [context] = useJobViewContext();
  const screenType = useScreenType();

  const config = useMemo(() => OfferConfig[screenType], [screenType]);

  return context.pending === 'done' ? (
    context.originalData.length > 0 ? (
      <ResizableGrid
        style={{ columnGap: config.gap, rowGap: 20 }}
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
      <JobViewContentNotFound />
    )
  ) : (
    <Loading />
  );
}

const OfferConfig = {
  desktop: {
    numOfColumn: 4,
    width: 250,
    gap: 20,
    direction: 'column',
  },
  tablet: {
    numOfColumn: 3,
    width: 220,
    gap: 30,
    direction: 'column',
  },
  mobile: {
    numOfColumn: 2,
    width: 160,
    direction: 'column',
    gap: 30,
    /** @type {import('chimplanet-ui/build/components/JobOffer/JobOffer').JobOfferProps['rowLayoutConfig']} */
    rowConfig: {
      height: 120,
      gap: 20,
    },
  },
};

/** @param {import('chimplanet-ui').ScreenType} */
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
