import { Banner } from '@services/entity';
import { getLocalStorageValue } from '@utils/storage';
import { useMemo } from 'react';

export interface BannerGroup {
  pc: Banner;
  mobile: Banner;
  type: Banner['type'];
  sequence: Banner['sequence'];
}

const useBanner = () => {
  const items = getLocalStorageValue<Banner[]>('banners');

  const res = useMemo(() => {
    const o = aggregate(items ?? []);

    return {
      main: o.filter((v) => v.type === 'MAIN'),
      mid: o.filter((v) => v.type === 'MID')[0],
    };
  }, [items]);

  return res;
};

export default useBanner;

const aggregate = (items: Banner[]): BannerGroup[] => {
  const group = items
    .filter((v) => v.use)
    .reduce(
      (acc, cur) => {
        const key = cur['to'];
        key in acc ? acc[key].push(cur) : (acc[key] = [cur]);
        return acc;
      },
      {} as Record<string, Banner[]>,
      // To Tuple
    ) as Record<string, [Banner, Banner]>;

  const groups = Object.entries(group).reduce((acc, [, value]) => {
    if (value.length !== 2) return acc; // ignore this case;

    /** @type {[Banner, Banner]} */
    const [pc, mobile] = value[0].device === 'PC' ? value : [value[1], value[0]];

    acc.push({
      pc,
      mobile,
      type: pc.type,
      sequence: pc.sequence,
    });
    return acc;
  }, [] as BannerGroup[]);

  // sort by sequence
  groups.sort((lhs, rhs) => lhs.sequence - rhs.sequence);

  return groups;
};
