import bannerEntries from '@/__mocks__/mock_banner_entries';
import HttpClient from './http-client';
import { select } from '@/service/domain.decorator';
import { Banner } from "@/service/banner";

class BannerClient extends HttpClient {
  constructor() {
    super('BannerClient', '/file');
  }

  /**
   * ! Banner API 완성시에 작성하시오
   * @returns Banner
   */
  async mainBanner() {
    return bannerEntries;
  }

  @select(collection => collection.map(Banner))
  async subBanner() {
    return await this.get("/banner");
  }
}

export default BannerClient;
