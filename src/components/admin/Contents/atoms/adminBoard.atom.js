import { atom, useRecoilState } from 'recoil';

const adminBoardAtom = atom({
  key: 'adminBoardAtom',
  default: {},
});

export function useAdminBoardState() {
  return useRecoilState(adminBoardAtom);
}
