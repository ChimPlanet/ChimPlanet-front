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
