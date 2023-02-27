export function isHangulChar(ch) {
  if (!ch) return false;
  return /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(ch);
}
