import HttpClient from './http-client';
import { select } from 'useful-decorator';
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
  async banners() {
    return await this.get('/banner');
  }

  /**
   * @param {import('../banner/banner-request').UploadBannerRequestOptions} options
   * @returns
   */
  async upload({ formData, fileId, ...options }, isUpdate = false) {
    const query = Object.entries(options)
      .map((e) => e.join('='))
      .join('&');

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    if (!isUpdate) {
      return await this.post('/image/?' + query, formData, config);
    } else {
      return await this.put(
        `/updateImage/${fileId}?` + query,
        formData,
        config,
      );
    }
  }
}

function typeBannerCollection(collection) {
  return collection.map(Banner);
}

export default BannerClient;
