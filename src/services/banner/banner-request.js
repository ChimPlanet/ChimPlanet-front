/**
 * @typedef {object} UploadBannerRequestOptions
 * @property {"MOBILE"|"PC"} deviceType
 * @property {"MAIN"|"MID"} fileType
 * @property {string} redirectUrl
 * @property {"CurrentTab" | "NewTab"} redirectType
 * @property {"Y"|"N"} useYn
 * @property {number} sequence
 * @property {File | FormData} formData
 * @property {number} fileId
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
  redirectType,
  fileId,
}) => {
  return {
    deviceType,
    fileType,
    redirectUrl,
    useYn,
    sequence,
    redirectType,
    fileId,
    formData: formDataForUploadBannerFromFile(formData),
  };
};

export const formDataForUploadBannerFromFile = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  return formData;
};

/**
 * @typedef {{fileId: number, sequence: number}[]} UpdateSequencesRequest
 *
 * @param {{pc: number, mobile: number, seq: number}[]} values
 * @returns {UpdateSequencesRequest}
 */
export function updateSequencesRequest(values) {
  return values.reduce((acc, cur) => {
    //Pc
    acc.push({
      fileId: cur.pc,
      sequence: cur.seq,
    });
    //Mobile
    acc.push({
      fileId: cur.mobile,
      sequence: cur.seq,
    });
    return acc;
  }, []);
}
