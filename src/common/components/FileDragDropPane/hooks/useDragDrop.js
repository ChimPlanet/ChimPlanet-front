import { useMemo } from 'react';

export default function useDragDrop({ setDragging, onDropFile }) {
  const handles = useMemo(
    () => ({
      onDragIn: defaultProcess,
      onDragOut(e) {
        defaultProcess(e);
        setDragging(false);
      },
      onDragOver(e) {
        defaultProcess(e);
        if (e.dataTransfer.files) setDragging(true);
      },
      onDrop(e) {
        defaultProcess(e);
        onDropFile(e);
        setDragging(false);
      },
    }),
    [setDragging, onDropFile],
  );

  return handles;
}

function defaultProcess(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
}
