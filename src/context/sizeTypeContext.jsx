import useResize from '@/common/hooks/useResize';
import { createContext, useContext } from 'react';

const sizeTypeContext = createContext(null);

export function SizeTypeContextProvider({ children }) {
  const sizeType = useResize();

  return (
    <sizeTypeContext.Provider value={sizeType}>
      {children}
    </sizeTypeContext.Provider>
  );
}

export function useSizeType() {
  return useContext(sizeTypeContext);
}
