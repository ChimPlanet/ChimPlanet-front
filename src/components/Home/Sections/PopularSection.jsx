import { fetchPopularOffer } from '@/service/offer/offer.api';
import { JobOfferSection } from '@/common/components/JobOffer';

export default function PopularSection() {
  return (
    <JobOfferSection
      queryKey="popular"
      title="실시간 인기 구인글"
      fetchFunction={fetchPopularOffer}
    />
  );
}
