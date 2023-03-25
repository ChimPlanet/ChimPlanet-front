/**
 * @typedef {object} UploadBannerRequestOptions
 * @property {"MOBILE"|"PC"} deviceType
 * @property {"MAIN"|"MID"} fileType
 * @property {string} redirectUrl
 * @property {"Y"|"N"} useYn
 * @property {number} sequence
 * @property {File | FormData} formData
 *
 * @param {UploadBannerRequestOptions}
 * @returns
 */
export const uploadBannerRequestOptions = ({
  deviceType,
  fileType,
  redirectUrl,
  useYn,
  sequence,
  formData,
}) => {
  return {
    deviceType,
    fileType,
    redirectUrl,
    useYn,
    sequence,
    formData: formDataForUploadBannerFromFile(formData),
  };
};

export const formDataForUploadBannerFromFile = (file) => {
  const formData = new FormData(file);
  formData.append('file', file);
  return formData;
};
