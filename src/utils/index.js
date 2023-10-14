/**
 * @template T
 * @param {Array<T>} array
 * @param {(element: T) => string} sourceGetter
 */
export function prefetchImages(array, sourceGetter) {
  array.forEach((elem) => {
    new Image().src = sourceGetter(elem);
  });
}

/**
 * @param {URLSearchParams} params
 */
export function getSearchMetadata(params) {
  return {
    type: params.get('type') || 'normal', // 타입이 만약 없는 경우 일반 검색으로 간주함.
    words: params.get('q')?.split(',') || [], // 검색 쿼리 배열
  };
}
