export const stringToDom = (str) => {
  return new DOMParser().parseFromString(str, 'text/html');
};

/**
 * @param {HTMLElement} doc
 */
export const removeHeader = (doc) => {
  const headerEl = doc.querySelector(
    '#SE-fe209951-d6e7-11ea-9687-e7fd650c59ac',
  );

  if (headerEl) {
    headerEl.remove();
  }
};

/**
 * @param {HTMLImageElement} imageElement
 */
export const configureImageNoRefererPolicy = (imageElement) => {
  imageElement.setAttribute('referrerpolicy', 'no-referrer');
};

/**
 * @param {HTMLElement} dom
 */
export const getAllImgElementsFromDom = (dom) => {
  return dom.querySelectorAll('img');
};
/**
 * @param {NodeList} nodeList
 */
export const adaptImagesNoRefererPolicy = (nodeList) => {
  nodeList.forEach(configureImageNoRefererPolicy);
  return nodeList;
};
