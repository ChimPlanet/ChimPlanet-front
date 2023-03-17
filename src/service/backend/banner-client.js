import bannerEntries from '@/__mocks__/mock_banner_entries';
import HttpClient from './http-client';

class BannerClient extends HttpClient {
  constructor() {
    super('BannerClient', '/banners');
  }

  /**
   * ! Banner API 완성시에 작성하시오
   * @returns Banner
   */
  async mainBanner() {
    return bannerEntries;
  }

  async subBanner() {
    return '';
  }
}

export default BannerClient;
