import mock_job_offers from '@/__mocks__/mock_job_offers';
import client from '../index';

/**
 * @api {get} /api/boards Get boards
 */
export default async () => {
  // const response = await client.get('/boards');
  // return response.data;
  await new Promise((r) => setTimeout(r, 500));
  return mock_job_offers;
};
