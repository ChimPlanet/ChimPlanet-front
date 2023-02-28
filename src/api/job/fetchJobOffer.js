import client from '../index';

/**
 * @api {get} /api/boards Get boards
 */
export default async () => {
  const response = await client.get('/boards');
  return response.data;
};
