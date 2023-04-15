/**
 * @param {any[]} items
 * @param {number} limit
 * @returns {any[]}
 */
export function selectRandomItemsInCollection(items, limit) {
  if (items.length <= limit) {
    return items;
  }

  // if items' length is over limit, then select items.
  const copyItems = [...items];

  for (let i = limit; i < items.length; i++) {
    let index = 0;

    while (copyItems[(index = randomIndexInArray(copyItems))] === null) {}

    copyItems[index] = null;
  }

  return copyItems.filter((v) => v !== null);
}

/**
 * @param {Array} array
 */
function randomIndexInArray(array) {
  return Math.floor(Math.random() * array.length);
}
