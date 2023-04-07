import Banner from './banner';
import { groupBy } from '@/utils';

/** @param {Banner[]} banners */
export function filterMainBanner(banners) {
  return banners.filter((banner) => banner.isMain);
}

export function filterSubBanner(banners) {
  return banners.filter((banner) => !banner.isMain);
}

/**
 * @typedef {object} PairedBanner
 * @property {Banner} mobile
 * @property {Banner} pc
 * @property {boolean} isMain
 *
 * @param {object} group
 *
 * @return {PairedBanner[]}
 */
export function pairBannerFromGroup(group) {
  const paired = Object.entries(group).reduce((acc, [key, value]) => {
    if (value.length !== 2) {
      throw new Error('Invalid pair group', value);
    }

    const [pc, mobile] =
      value[0].deviceType === 'PC'
        ? [value[0], value[1]]
        : [value[1], value[0]];

    acc.push({
      pc,
      mobile,
      isMain: value[0].isMain,
    });
    return acc;
  }, []);

  return paired;
}

/**
 * @param {Banner[]} banners
 * @param {"PC" | "MOBILE"} type
 */
export function getBannerByType(banners, type) {
  return filterMainBanner(banners)
    .map((b) => (type === 'PC' ? b.pc : b.mobile))
    .sort((lhs, rhs) => lhs.sequence - rhs.sequence);
}
