/**
 * @typedef {object} Banner
 * @property {string} created
 * @property {"MOBILE"|"PC"} device
 * @property {string} id
 * @property {string} fileName
 * @property {"MAIN"|"MID"} type
 * @property {string} imageUrl
 * @property {"CurrentTab" | "NewTab"} redirectType
 * @property {string} to
 * @property {number} sequence
 * @property {boolean} use
 */

/**
 * @typedef {object} ResponseBanner
 * @property {string} createdDate
 * @property {"MOBILE"|"PC"} deviceType
 * @property {string} fileId
 * @property {string} fileName
 * @property {"MAIN"|"MID"} imageType
 * @property {string} imageUri
 * @property {"CurrentTab" | "NewTab"} redirectType
 * @property {string} redirectUrl
 * @property {string} sequence
 * @property {string} useYn
 */

/**
 * @function
 * @param {ResponseBanner} r
 * @returns {Banner}
 */
export const parseBannerFromResponse = (r) => ({
  created: new Date(r.createdDate),
  device: r.deviceType,
  id: r.fileId,
  fileName: r.fileName,
  type: r.imageType,
  imageUrl: r.imageUri,
  redirectType: r.redirectType,
  to: r.redirectUrl,
  sequence: parseInt(r.sequence),
  use: r.useYn === 'Y',
});
