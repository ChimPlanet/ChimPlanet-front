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
 * @param {HTMLElement} doc
 */
export const adaptJavascriptData = (doc) => {
  const scriptEls = doc.querySelectorAll('.__se_module_data');

  scriptEls.forEach((el) => {
    if (el.getAttribute('type') === 'text/data') {
      const m = JSON.parse(el.dataset.module);

      if (m.type === 'v2_oembed') {
        const targetEl = doc.querySelector(`#${m.id}`);
        if (targetEl) {
          targetEl.innerHTML = m.data.html;
        }
      }
    }
  });
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

/**
 * @param {NodeList} nodeList
 * @param {(imageElement: Element) => void} listener
 */
export const adaptImageClickListener = (nodeList, listener) => {
  nodeList.forEach((el) => {
    el.onclick = (e) => e.target && listener(e.target);
  });
};
