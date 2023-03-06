import client from '../index';
import mock_job_offers from '@/__mocks__/mock_job_offers';

/**
 * @api {get} /api/boards Get boards
 */
export default async () => {
  // const response = await client.get('/boards');
  // return response.data;

  return mock_job_offers;
};
