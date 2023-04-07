import React, { useMemo } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import BannerSequenceDragItem from './BannerSequenceDragItem';
import { Container } from './BannerSequenceForm.style';
import { getIdBySequenceItem } from '../utils';
import useBannerSequenceForm from '../hooks/useBannerSequenceForm';

/**
 * @returns
 */
export default function BannerSequenceForm({ sequence, setSequence }) {
  const { moveTo, createDeleteHandle } = useBannerSequenceForm(
    sequence,
    setSequence,
  );

  const maxLength = useMemo(() => sequence.length, [sequence.length]);

  function handleDragEnd({ draggableId, destination }) {
    // Get Position For Calculate
    const [originPosition, destinationPosition] = [
      sequence.findIndex((item) => getIdBySequenceItem(item) === draggableId),
      destination.index,
    ];
    moveTo(originPosition, destinationPosition);
  }

  return (
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {sequence.map((item, index) => (
                <Draggable
                  key={getIdBySequenceItem(item)}
                  draggableId={getIdBySequenceItem(item)}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      children={
                        <BannerSequenceDragItem
                          maxLen={maxLength}
                          seq={item.seq}
                          data={item}
                          onDelete={createDeleteHandle(index)}
                        />
                      }
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
}
