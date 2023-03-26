import Banner from './banner';

/** @param {Banner[]} banners */
export function filterMainBanner(banners) {
  return banners.filter((banner) => banner.isMain);
}

export function filterSubBanner(banners) {
  return banners.filter((banner) => !banner.isMain);
}
