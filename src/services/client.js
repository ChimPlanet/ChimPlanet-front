import { getApiBase } from '@constants';
import axios from 'axios';

const client = axios.create({
  timeout: 3000,
  baseURL: getApiBase(),
});

export default client;
