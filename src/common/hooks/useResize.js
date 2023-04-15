import { baseTheme } from '@/theme';
import { useState, useLayoutEffect } from 'react';

const getWidth = () =>
  window.innerWidth || //뷰포트의 폭 가져오기
  document.documentElement.clientWidth || //content만의 너비
  document.body.clientWidth;

// 너비 내림차순으로 정렬
const sizeKeys = Object.keys(baseTheme.sizes).sort(
  (a, b) => baseTheme.sizes[b] - baseTheme.sizes[a],
);

/**
 *
 * @param {number} width
 * @returns {keyof typeof baseTheme['sizes']}
 */
function getSizeType(width) {
  for (const key of sizeKeys) {
    if (width >= baseTheme.sizes[key]) return key;
  }
  return sizeKeys.at(-1);
}

export default function useResize() {
  let [type, setType] = useState(getSizeType(getWidth()));

  useLayoutEffect(() => {
    let timeoutId = null;

    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setType(getSizeType(getWidth())), 10);
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return type;
}
