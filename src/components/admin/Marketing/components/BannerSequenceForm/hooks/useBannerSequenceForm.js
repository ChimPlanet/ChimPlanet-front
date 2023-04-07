import { useMemo } from 'react';
import {
  copySequences,
  reallocationSequences,
  updateSequences,
} from '../utils';
import backend from '@/service/backend';

export default function useBannerSequenceForm(sequence, setSequence) {
  const handle = useMemo(
    () => ({
      /** @param {number} index */
      createDeleteHandle(index) {
        return () => {
          const duplicated = copySequences(sequence);
          const item = duplicated[index];
          duplicated.splice(index, 1);
          setSequence(reallocationSequences(duplicated));

          Promise.all([
            backend.banners.deleteBanner(item.pc),
            backend.banners.deleteBanner(item.mobile),
          ]);
        };
      },
      /**
       * @param {number} origin
       * @param {number} destination
       */
      moveTo(origin, destination) {
        setSequence(updateSequences(sequence, origin, destination));
      },
    }),
    [sequence, setSequence],
  );

  return handle;
}
