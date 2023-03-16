import mock_job_offers from '@/__mocks__/mock_job_offers';
import client from '../client';

export async function fetchOffers() {
  return mock_job_offers;
}

export async function fetchOfficialOffer() {
  return mock_job_offers;
}

export async function fetchPopularOffer() {
  return mock_job_offers;
}

export async function fetchRecentOffer() {
  const response = await client.get('/boards/new');
  return response.data;
}

export async function fetchOfferContent(id) {
  const response = await client.get('/boards/' + id);

  return response.data;
}
