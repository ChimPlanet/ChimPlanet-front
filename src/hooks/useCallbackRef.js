import { useLayoutEffect, useRef } from "react";


export default function useCallbackRef(callback) {

  const callbackRef = useRef(callback);

  useLayoutEffect(()=>{
    callbackRef.current = callback;
  }, [callback]);

  return callbackRef;
}
