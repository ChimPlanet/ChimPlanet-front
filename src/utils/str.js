export function isHangulChar(ch) {
  if (!ch) return false;
  return /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(ch);
}

export function ignorePrefix(str, prefix = '#') {
  return str.startsWith(prefix) ? str.slice(prefix.length) : str;
}
