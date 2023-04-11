import { JobOfferSection } from '@/common/components/JobOffer';
import backend from '@/service/backend';

export default function PopularSection() {
  return (
    <JobOfferSection
      queryKey="popular"
      title="인기 구인글"
      fetchFunction={backend.offers.popular}
    />
  );
}
