import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import BannerSequenceDragItem from './BannerSequenceDragItem';
import { Container } from './BannerSequenceForm.style';

/**
 * @returns
 */
export default function BannerSequenceForm({ banners }) {
  function handleDragEnd() {}

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {banners.map((item, i) => (
              <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={i}
              >
                {(provided, snapshot) => (
                  <BannerSequenceDragItem
                    ref={provided.innerRef}
                    data={item}
                    {...provided.dragHandleProps}
                  />
                )}
              </Draggable>
            ))}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
}
