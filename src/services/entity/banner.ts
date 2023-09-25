import { createEntityFactory } from './base';

type BannerDeviceType = 'MOBILE' | 'PC';
type BannerImageType = 'MAIN' | 'MID';
type BannerRedirectType = 'CurrentTab' | 'NewTab';

export interface BannerDAO {
  createdDate: string;
  fileId: string;
  fileName: string;
  imageUri: string;
  redirectUrl: string;
  sequence: string;
  useYn: 'Y' | 'N';
  deviceType: BannerDeviceType;
  imageType: BannerImageType;
  redirectType: BannerRedirectType;
}

export interface Banner {
  id: string;
  created: Date;
  fileName: string;
  imageUrl: string;
  to: string;
  sequence: number;
  use: boolean;
  device: BannerDeviceType;
  type: BannerImageType;
  redirectType: BannerRedirectType;
}

export const parseBannerFromResponse = createEntityFactory<BannerDAO, Banner>({
  device: 'deviceType',
  id: 'fileId',
  fileName: 'fileName',
  type: 'imageType',
  imageUrl: 'imageUri',
  redirectType: 'redirectType',
  to: 'redirectUrl',
  created: ({ createdDate }) => new Date(createdDate),
  sequence: ({ sequence }) => parseInt(sequence),
  use: ({ useYn }) => useYn === 'Y',
});
