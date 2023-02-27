import client from '../index';
import tags from '@/__mocks__/mock_tags';

export default async () => {
  // return await client.get()

  await new Promise((r) => setTimeout(r, 500));

  return tags;
};
