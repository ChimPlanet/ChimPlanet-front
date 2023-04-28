import {
  JobOfferMapContent,
  ResizableGrid,
  useScreenType,
} from 'chimplanet-ui';

import { useJobOfferByArrayId } from '@/query/offer';

import { BookmarkContext } from '@/utils/Context/bookmarkContext';
import { useMemo } from 'react';

export default function BookmarkSection() {
  const screenType = useScreenType();
  const { data: offers } = useJobOfferByArrayId(
    BookmarkContext.getInstance().get(),
  ); // ! 테스트용 임시 호출

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
      <JobOfferMapContent jobs={offers || []} />
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
