import axios from 'axios';

import { getApiBase } from '@/constants';

const client = axios.create({
  timeout: 3000,
  baseURL: getApiBase(),
  // withCredentials: true,
});

class HttpClient {
  constructor(serviceName, nested) {
    this.serviceName = serviceName;
    this.nested = nested;
  }

  /** @param {string} endpoint */
  async get(endpoint) {
    const response = await client.get(this.nested + endpoint);
    return response.data;
  }

  /**
   * @param {string} endpoint
   * @param {object} body
   * @param {import('axios').AxiosRequestConfig<any>} config
   */
  async post(endpoint, body, config) {
    const response = await client.post(this.nested + endpoint, body, config);
    return response.data;
  }

  /** @param {string} endpoint */
  async delete(endpoint) {
    const response = await client.delete(this.nested + endpoint);
    return response.data;
  }

  /**
   * @param {string} endpoint
   * @param {object} body
   * @param {import('axios').AxiosRequestConfig<any>} config
   */
  async update(endpoint, body, config) {
    const response = await client.put(this.nested + endpoint, body, config);
    return response.data;
  }
}

export default HttpClient;
