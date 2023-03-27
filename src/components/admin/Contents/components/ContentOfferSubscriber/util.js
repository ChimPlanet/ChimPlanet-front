export const stringToDom = (str) => {
  return new DOMParser().parseFromString(str, 'text/html');
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
