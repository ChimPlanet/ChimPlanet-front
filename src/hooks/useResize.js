import { useState, useLayoutEffect } from 'react';

const getWidth = () =>
  window.innerWidth || //뷰포트의 폭 가져오기
  document.documentElement.clientWidth || //content만의 너비
  document.body.clientWidth;

export default function useResize() {
  let [WIDTH, setWIDTH] = useState(getWidth());

  useLayoutEffect(() => {
    let timeoutId = null;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWIDTH(getWidth()), 10);
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return WIDTH;
}
