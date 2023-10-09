import { useEffect, useRef } from 'react';

/**
 *
 * @param {{html: string, onLoad(element: HTMLDivElement) => void, onUnload?(element: HTMLDivElement)=>void}}
 * @returns
 */
export default function PurifyHtml({ html, onLoad, onUnload, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      onLoad(ref.current);
    }

    return () => {
      if (ref.current && onUnload) onUnload(ref.current);
    };
  }, [ref.current, onLoad, onUnload]);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} {...props} />;
}
