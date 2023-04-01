import { useMemo } from 'react';
import { useRecoilState, atom } from 'recoil';

const sidebarJSXElementAtom = atom({
  default: [],
  key: 'admin-sidebar-component',
});

/**
 * @returns {[JSX.Element, {clear():void, setElement(element: JSX.Element):void}]}
 */
export default function useAdminSidebarJSXElement() {
  const [Elements, setElements] = useRecoilState(sidebarJSXElementAtom);

  // 어드민 페이지 사이트바 제어 로직
  const handle = useMemo(
    () => ({
      clear: () => setElements([]),
      pop: () =>
        setElements((prev) =>
          prev.length > 1 ? prev.slice(0, prev.length - 1) : [],
        ),
      push: (element) => setElements((prev) => [...prev, element]),
    }),
    [setElements],
  );

  return [Elements.at(-1), handle];
}
