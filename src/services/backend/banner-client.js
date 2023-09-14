import { Banner } from '@services/banner';
import { groupBy } from '@utils';
import { select } from 'useful-decorator';
import { pairBannerFromGroup } from '../banner/banner-utils';
import HttpClient from './http-client';

class BannerClient extends HttpClient {
  constructor() {
    super('BannerClient', '/file');
  }

  /**
   * ! Banner API 완성시에 작성하시오
   * @returns {Promise<Banner[]>}
   */
  @select(typeBannerCollection)
  async banners() {
    return await this.get('/banner');
  }
}

function typeBannerCollection(collection) {
  const banners = collection.map(Banner);

  return pairBannerFromGroup(groupBy(banners, 'redirectUrl'));
}

export default BannerClient;
