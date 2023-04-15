export function groupBy(collection, attributeName) {
  if (!Array.isArray(collection)) {
    throw new TypeError('Collection must be an array');
  }

  const group = collection.reduce((acc, cur) => {
    const key = cur[attributeName];
    if (!(key in acc)) {
      acc[key] = [];
    }
    acc[key].push(cur);
    return acc;
  }, {});

  return group;
}

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
