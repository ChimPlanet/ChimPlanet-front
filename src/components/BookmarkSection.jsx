import { JobOfferMapContent, ResizableGrid, useScreenType } from '@chimplanet/ui';

import { useArticle } from '@components/ArticleRenderer/hook';
import useBookmark from '@hooks/useBookmark';
import { useMemo } from 'react';

export default function BookmarkSection() {
  const screenType = useScreenType();
  const [, { open }] = useArticle();
  const { toggle, is, bookmarks } = useBookmark();

  console.log(bookmarks);

  const layoutConfig = useMemo(() => OfferLayoutConfig[screenType], [screenType]);

  return (
    <ResizableGrid
      style={{ rowGap: 30, columnGap: layoutConfig.columnGap }}
      calcNumberOfColumns={calcColumns}
    >
      <JobOfferMapContent
        jobs={bookmarks.map(Offer) || []}
        isBookmarked={is}
        onBookmarkClick={toggle}
        onClick={open}
        rowLayoutConfig={OfferLayoutConfig[screenType]}
        offerWidth={layoutConfig.width}
      />
    </ResizableGrid>
  );
}
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
