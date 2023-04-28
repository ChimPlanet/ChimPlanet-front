import { useJobViewContext } from '../JobViewContext';
import { useEffect } from 'react';
import { JobOfferMapContent, ResizableGrid } from 'chimplanet-ui';
import { useJobViewOffers } from '../api/query';
import { BookmarkContext } from '@/utils/Context/bookmarkContext';
import { useArticleContext } from '@/context/articleContext';
import useBookmark from '@/hooks/useBookmark';

export default function JobViewContent() {
  const [, { open }] = useArticleContext();
  const { toggle } = useBookmark();
  const [context, dispatch] = useJobViewContext();
  const { data: offers } = useJobViewOffers(context.searchMetadata);

  useEffect(() => dispatch({ originalData: offers }), [offers]);

  return (
    <ResizableGrid
      style={{ rowGap: 50, columnGap: 20 }}
      calcNumberOfColumns={calcColumns}
    >
      <JobOfferMapContent
        onClick={open}
        onBookmarkClick={toggle}
        isBookmarked={(id) =>
          BookmarkContext.getInstance().getBookmarkSet().has(id)
        }
        jobs={context.displayedData}
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
      return 1;
  }
}
