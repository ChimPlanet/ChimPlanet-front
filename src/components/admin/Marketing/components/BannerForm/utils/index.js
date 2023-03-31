import { Banner } from '@/service/banner';

/**
 * @param {Banner} banner
 * @return {import('../hooks/useBannerForm').BannerFormState}
 */
export function formVOFromBanner(banner) {
  return {
    deviceType: banner.isMain ? 'MAIN' : 'PC',
    fileType: banner.isMain ? 'MAIN' : 'MID',
    redirectUrl: banner.redirectUrl,
    redirectionType: banner.redirectType,
    useYn: banner.yn ? 'Y' : 'N',
    sequence: banner.sequence,
    formData: null,
  };
}

export const imageRect = {
  width: '100%',
  height: '100%',
};

/** @param {File} file */
export function validateFile(file) {
  // check if the file type is 'image'
  return file.type.startsWith('image') && file.size <= MAX_IMAGE_FILE_SIZE;
}

const MAX_IMAGE_FILE_SIZE = 10_000_000; // 10 mb

export function encodeFileToBase64(blob) {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise((resolve) => {
    reader.onload = () => resolve(reader.result);
  });
}
