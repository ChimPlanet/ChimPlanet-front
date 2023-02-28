import { API_BASE_URL } from '@/constants';

import axios from 'axios';

const client = axios.create({
  timeout: 3000,
  baseURL: API_BASE_URL,
  // withCredentials: true,
});

// client.interceptors.request.use()

export default client;
