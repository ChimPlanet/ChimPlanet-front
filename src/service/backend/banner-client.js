import HttpClient from './http-client';
import { select } from '@/service/domain.decorator';
import { Banner } from '@/service/banner';

class BannerClient extends HttpClient {
  constructor() {
    super('BannerClient', '/file');
  }

  /**
   * ! Banner API 완성시에 작성하시오
   * @returns {Promise<Banner[]>}
   */
  @select(typeBannerCollection)
  async mainBanner() {
    return await this.get('/banner');
  }

  @select(typeBannerCollection)
  async subBanner() {
    return await this.get('/banner');
  }

  /**
   * @param {import('../banner/banner-request').UploadBannerRequestOptions} options
   * @returns
   */
  async upload({ formData, ...options }) {
    const query = Object.entries(options)
      .map((e) => e.join('='))
      .join('&');

    return await this.post('/image?' + query, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

function typeBannerCollection(collection) {
  return collection.map(Banner);
}

export default BannerClient;
