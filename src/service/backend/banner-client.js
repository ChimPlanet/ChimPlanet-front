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
  @select(typeBannerCollection)
  async mainBanner() {
    return await this.get("/banner");
  }

  @select(typeBannerCollection)
  async subBanner() {
    return await this.get("/banner");
  }
}

function typeBannerCollection(collection) {
  return collection.map(Banner);
}

export default BannerClient;
