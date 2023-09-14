export function convertStringsToRegExp(strings) {
  return new RegExp(
    strings
      .map((s) => s.replace(/[()[\]{}*+?^$|#.,\/\\\s-]/g, '\\$&'))
      .sort((a, b) => b.length - a.length)
      .join('|'),
    'gi',
  );
}
