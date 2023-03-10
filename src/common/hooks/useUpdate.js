import { useState } from 'react';

export default function useUpdate() {
  const [, setUpdate] = useState(false);

  return () => setUpdate((p) => p + 1);
}
