import React, { useMemo } from 'react';

import { VerticalDraggableList } from 'chimplanet-ui';

import BannerSequenceDragItem from './BannerSequenceDragItem';
import { Container } from './BannerSequenceForm.style';
import { getIdBySequenceItem } from '../utils';
import useBannerSequenceForm from '../hooks/useBannerSequenceForm';

/**
 * @returns
 */
export default function BannerSequenceForm({ sequence, setSequence }) {
  // Form Hook for Handle Sequence
  const { moveTo, createDeleteHandle } = useBannerSequenceForm(
    sequence,
    setSequence,
  );

  // Max length
  const MAX_LEN = useMemo(() => sequence.length, [sequence.length]);

  function handleDragEnd({ draggableId, destination }) {
    // Get Origin, Destination Position For Calculate
    const [originPosition, destinationPosition] = [
      sequence.findIndex((item) => getIdBySequenceItem(item) === draggableId),
      destination.index,
    ];
    moveTo(originPosition, destinationPosition);
  }

  return (
    <Container>
      <VerticalDraggableList
        droppableId="banner-sequence"
        items={sequence}
        getIdByItem={getIdBySequenceItem}
        onDragEnd={handleDragEnd}
      >
        {(item, index) => (
          <BannerSequenceDragItem
            maxLen={MAX_LEN}
            seq={item.seq}
            data={item}
            onDelete={createDeleteHandle(index)}
          />
        )}
      </VerticalDraggableList>
    </Container>
  );
}
