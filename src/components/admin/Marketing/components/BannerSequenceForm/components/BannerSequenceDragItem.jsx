import { forwardRef } from 'react';

function BannerSequenceDragItem({ data, ...handles }, ref) {
  return (
    <div ref={ref} {...handles}>
      BannerSequenceDragItem
    </div>
  );
}

export default forwardRef(BannerSequenceDragItem);
