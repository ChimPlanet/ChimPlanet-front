/**
 * @typedef {object} Tag
 * @property {string} id
 * @property {string} name
 * @property {string} parent
 * @property {string} child
 */

/**
 * @typedef {object} ResponseTag
 * @property {string} tagId
 * @property {string} tagName
 * @property {string} parentTagId
 * @property {string} childTagId
 */

/**
 * @function
 * @param {ResponseTag} r
 * @returns {Tag}
 */
export const parseTagFromResponse = (r) => ({
  id: r.tagId,
  name: r.tagName,
  parent: r.parentTagId,
  child: r.childTagId,
});
