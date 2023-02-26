import { useCallback } from 'react';

/**
 * 범위에 벋어난 값을 정상화합니다.
 * @param {number} MAX_LEN
 * @returns {(value: number) => number}
 */
export default function useNormalize(MAX_LEN) {
  return useCallback(
    (value) => {
      if (value >= MAX_LEN || value < 0)
        return value + (value >= MAX_LEN ? -MAX_LEN : MAX_LEN);
      return value;
    },
    [MAX_LEN],
  );
}
