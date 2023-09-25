export const isHangulChar = (ch: string) => {
  if (!ch) return false;
  return /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(ch);
};

export const removePrefix = (str: string, prefix = '#') =>
  str.startsWith(prefix) ? str.slice(prefix.length) : str;

export const convertStringsToRegExp = (strings: string[]) =>
  new RegExp(
    strings
      // eslint-disable-next-line no-useless-escape
      .map((s) => s.replace(/[()[\]{}*+?^$|#.,\/\\\s-]/g, '\\$&'))
      .sort((a, b) => b.length - a.length)
      .join('|'),
    'gi',
  );
