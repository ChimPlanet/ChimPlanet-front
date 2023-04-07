import { useMemo } from 'react';
import {
  copySequences,
  reallocationSequences,
  updateSequences,
} from '../utils';

export default function useBannerSequenceForm(sequence, setSequence) {
  const handle = useMemo(
    () => ({
      /** @param {number} index */
      createDeleteHandle(index) {
        return () => {
          const duplicated = copySequences(sequence);
          duplicated.splice(index, 1);
          setSequence(reallocationSequences(duplicated));
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
