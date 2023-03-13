import { JobOfferMapContent } from '@/common/components/JobOffer';
import ResizableGrid from '@/common/components/ResizableGrid';
import { useJobViewContext } from '../JobViewContext';
import { useEffect } from 'react';
import { useJobViewOffers } from '../api/query';

export default function JobViewContent() {
  const [context, dispatch] = useJobViewContext();
  const { data: offers } = useJobViewOffers(context.searchMetadata);

  useEffect(() => dispatch({ originalData: offers }), [offers]);

  return (
    <ResizableGrid>
      <JobOfferMapContent jobs={context.displayedData} />
    </ResizableGrid>
  );
}
