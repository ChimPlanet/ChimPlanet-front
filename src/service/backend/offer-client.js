import { select } from 'useful-decorator';
import { Offer, OfferContent } from '@/service/offer';
import HttpClient from './http-client';
import mock_job_offers from '@/__mocks__/mock_job_offers';

class OfferClient extends HttpClient {
  constructor() {
    super('OfferService', '/boards');
  }

  async basic(id, size, page, sort, isEnd, value) {
    if(isEnd === 'ALL'){
      if(value === null){
        return await this.post(
          `?lastArticleId=${id}&size=${size}&page=${page}&sort=${sort}`
        );
      }else{
        return await this.post(
          `?lastArticleId=${id}&size=${size}&page=${page}&sort=${sort}&lastInputValue=${value}`
        );
      }
    }else{
      if(value === null){
        return await this.post(
          `?lastArticleId=${id}&size=${size}&page=${page}&sort=${sort}&isEnd=${isEnd}`
        );
      }else{
        return await this.post(
          `?lastArticleId=${id}&size=${size}&page=${page}&sort=${sort}&isEnd=${isEnd}&lastInputValue=${value}`
        );
      }
    }
  }

  @select(typeOfferArray)
  async recent() {
    return await this.get('/new');
  }

  @select(typeOfferArray)
  async popular() {
    return (await this.post('?sort=readCount')).content;
  }

  @select(typeOfferArray)
  async event() {
    return mock_job_offers;
  }

  @select(typeOfferArray)
  async official() {
    return mock_job_offers;
  }

  @select(OfferContent)
  async content(id) {
    return await this.get('/' + id);
  }

  @select(typeOfferArrayNoDup)
  async searchTags(ids) {
    return await this.get(
      `/search?searchTagId=${encodeURIComponent(ids.join(','))}`,
    );
  }

  @select(typeOfferArrayNoDup)
  async searchTitle(title) {
    return await this.get(`/search?title=${title}`);
  }

  /**
   * ! 추후 수정
   * @param {*} id
   * @returns
   */
  @select(Offer)
  async byMultipleId(ids) {
    return [];
  }
}

function typeOfferArray(values) {
  return values.map(Offer);
}

function typeOfferArrayNoDup(values) {
  /** @type {Offer[]} */
  const offers = values.map(Offer);
  const idSet = new Set();
  return offers.reduce((acc, item) => {
    if (!idSet.has(item.id)) {
      acc.push(item);
      idSet.add(item.id);
    }
    return acc;
  }, []);
}

export default OfferClient;
