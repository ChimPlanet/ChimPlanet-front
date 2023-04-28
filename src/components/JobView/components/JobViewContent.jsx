import { useJobViewContext } from '../JobViewContext';
import { useEffect, useMemo } from 'react';
import {
  JobOfferMapContent,
  ResizableGrid,
  useScreenType,
} from 'chimplanet-ui';
import { useJobViewOffers } from '../api/query';
import { BookmarkContext } from '@/utils/Context/bookmarkContext';
import { useArticleContext } from '@/context/articleContext';
import useBookmark from '@/hooks/useBookmark';

export default function JobViewContent() {
  const [, { open }] = useArticleContext();
  const { toggle } = useBookmark();
  const [context, dispatch] = useJobViewContext();
  const { data: offers } = useJobViewOffers(context.searchMetadata);
  const screenType = useScreenType();

  useEffect(() => dispatch({ originalData: offers }), [offers]);

  const layoutConfig = useMemo(
    () =>
      screenType === 'desktop'
        ? {
            columnGap: 20,
            width: 250,
          }
        : { columnGap: 25, width: 220 },
    [screenType],
  );

  return (
    <ResizableGrid
      style={{ rowGap: 50, columnGap: layoutConfig.columnGap }}
      calcNumberOfColumns={calcColumns}
    >
      <JobOfferMapContent
        onClick={open}
        onBookmarkClick={toggle}
        isBookmarked={(id) =>
          BookmarkContext.getInstance().getBookmarkSet().has(id)
        }
        jobs={context.displayedData}
        offerWidth={layoutConfig.width}
      />
    </ResizableGrid>
  );
}

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
