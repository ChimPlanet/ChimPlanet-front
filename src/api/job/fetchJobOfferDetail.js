import mock_job_detail from '@/__mocks__/mock_job_detail';

export default async (id) => {
  await new Promise((r) => setTimeout(r, 1000));

  return mock_job_detail;
};
