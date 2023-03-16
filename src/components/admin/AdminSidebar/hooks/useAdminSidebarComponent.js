import { useMemo } from 'react';
import { useRecoilState, atom } from 'recoil';

const sidebarJSXElementAtom = atom({
  default: null,
  key: 'admin-sidebar-component',
});

/**
 * @returns {[JSX.Element, {clear():void, setElement(JSX.Element):void}]}
 */
export default function useAdminSidebarJSXElement() {
  const [Element, setElement] = useRecoilState(sidebarJSXElementAtom);

  // 어드민 페이지 사이트바 제어 로직
  const handle = useMemo(
    () => ({
      clear: () => setElement(null),
      setElement,
    }),
    setElement,
  );

  return [Element, handle];
}
