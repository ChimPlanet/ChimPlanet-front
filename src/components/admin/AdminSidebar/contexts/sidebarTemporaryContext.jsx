import { useContext, useReducer, createContext } from 'react';

const sidebarTemporaryValue = createContext();

const sidebarTemporaryDispatcher = createContext();

export function SidebarTemporaryProvider({ children }) {
  const [state, dispatch] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {},
  );

  return (
    <sidebarTemporaryValue.Provider value={state}>
      <sidebarTemporaryDispatcher.Provider value={dispatch}>
        {children}
      </sidebarTemporaryDispatcher.Provider>
    </sidebarTemporaryValue.Provider>
  );
}

export const useSidebarTemporaryValue = () => useContext(sidebarTemporaryValue);
export const useSidebarTemporaryDispatcher = () =>
  useContext(sidebarTemporaryDispatcher);
