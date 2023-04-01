import { atom, useRecoilState } from 'recoil';

const adminBannerAtom = atom({
  key: 'adminBannerAtom',
  default: [],
});

export function useAdminBannerState() {
  return useRecoilState(adminBannerAtom);
}
