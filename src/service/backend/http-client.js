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

  async get(endpoint) {
    const response = await client.get(this.nested + endpoint);
    return response.data;
  }

  async post(endpoint, body, config) {
    const response = await client.post(this.nested + endpoint, body, config);
    return response.data;
  }

  async delete(endpoint) {
    const response = await client.delete(this.nested + endpoint);
    return response.data;
  }

  async update(endpoint, body) {
    const response = await client.update(this.nested + endpoint, body);
    return response.data;
  }
}

export default HttpClient;
