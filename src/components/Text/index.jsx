// import React from "react";
/**
 * @param {{children: string}}
 * @returns
 */
export default function Text({ children }) {
  if (typeof children !== "string") {
    throw Error("Text 컴포넌트는 항상 문자열을 입력받습니다.", children);
  }
  return <>{children}</>;
}
