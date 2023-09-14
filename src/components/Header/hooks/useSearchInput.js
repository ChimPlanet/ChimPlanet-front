import { useRef } from 'react';

import { isHangulChar } from '@utils/str';
import { useSearchContext } from '../context/searchContext';

export default function useSearchInput() {
  // 마지막 입력이 한글 입력인지 확인(input 한글 버그 해소용)
  const [{ input, tags, searchType }, { search, removeTag, addTag }] =
    useSearchContext();
  const lastHangulRef = useRef(false);

  const onEnter = (e) => {
    switch (e.key) {
      case 'Enter':
        // 검색 경우
        switch (searchType) {
          case 'normal':
            if (input.length > 0) search();
            break;
          case 'tag':
            if (input.length === 0 && tags.length > 0) search();
            break;
        }

        // 한글 관련 이벤트 오류 해소
        if (lastHangulRef.current) {
          lastHangulRef.current = false;
          return;
        }
        addTag(input);
        break;
      case 'Backspace':
        if (input.length === 0 && tags.length > 0) removeTag(tags.at(-1));
        break;
      default:
        lastHangulRef.current = isHangulChar(e.key);
    }
  };

  return onEnter;
}
