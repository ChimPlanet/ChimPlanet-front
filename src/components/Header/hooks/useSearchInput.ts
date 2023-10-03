import { KeyboardEvent, useRef } from 'react';

import { isHangulChar } from '@utils/str';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../context/searchContext';

export default function useSearchInput() {
  // 마지막 입력이 한글 입력인지 확인(input 한글 버그 해소용)
  const navigate = useNavigate();
  const { tags, bundle, getStrategy } = useSearch();
  const lastHangulRef = useRef(false);

  const onEnter = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
        {
          // 전략 생성
          const strategy = getStrategy();
          // - 전략이 사용 가능한 경우
          if (strategy.useable()) {
            navigate(strategy.makeURI());
            return;
          }

          // 한글 관련 이벤트 오류 해소
          if (lastHangulRef.current) {
            lastHangulRef.current = false;
            return;
          }
          tags.add(bundle.text, true);
        }
        break;
      case 'Backspace':
        if (bundle.text.length === 0 && bundle.tags.length > 0) tags.remove(bundle.tags.at(-1)!);
        break;
      default:
        lastHangulRef.current = isHangulChar(e.key);
    }
  };

  return onEnter;
}
