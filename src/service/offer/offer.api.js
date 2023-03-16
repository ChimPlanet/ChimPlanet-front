import mock_job_detail from '@/__mocks__/mock_job_detail';
import mock_job_offers from '@/__mocks__/mock_job_offers';

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
  return mock_job_offers;
}

export async function fetchOfferContent(id) {
  return mock_job_detail;
}
