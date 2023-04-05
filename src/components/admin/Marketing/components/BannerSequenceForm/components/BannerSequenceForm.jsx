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
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {banners.map((item, index) => (
                <Draggable
                  key={item.id.toString()}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      children={<BannerSequenceDragItem data={item} />}
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
