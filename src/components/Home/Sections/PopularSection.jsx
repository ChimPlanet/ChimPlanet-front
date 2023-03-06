import fetchPopularOffer from '@/api/job/fetchPopularOffer';
import JobOfferSection from '@/components/JobOffer/JobOfferSection';

export default function PopularSection() {
  return (
    <JobOfferSection
      queryKey="popular"
      title="실시간 인기 구인글"
      fetchFunction={fetchPopularOffer}
    />
  );
}
