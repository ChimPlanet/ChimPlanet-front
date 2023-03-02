import client from '../index';

/**
 *
 */
export default async () => {
  // return await client.get()

  await new Promise((r) => setTimeout(r, 500));

  return '';
};
