import { useJobViewContext } from '../JobViewContext';
import { useMemo } from 'react';
import {
  JobOfferMapContent,
  Loading,
  ResizableGrid,
  useScreenType,
} from 'chimplanet-ui';
import { BookmarkContext } from '@/utils/Context/bookmarkContext';
import { useArticleContext } from '@/context/articleContext';
import useBookmark from '@/hooks/useBookmark';
import JobViewContentNotFound from './JobViewContentNotFound';

export default function JobViewContent() {
  const [, { open }] = useArticleContext();
  const { toggle } = useBookmark();
  const [context, dispatch] = useJobViewContext();
  const screenType = useScreenType();

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

  return context.pending === 'done' ? (
    context.originalData.length > 0 ? (
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
          offerWidth={160}
        />
      </ResizableGrid>
    ) : (
      <JobViewContentNotFound />
    )
  ) : (
    <Loading />
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
