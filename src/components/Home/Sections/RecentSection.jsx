import fetchRecentOffer from '@/api/job/fetchRecentOffer';
import JobOfferSection from '@/components/JobOfferSection';

export default function RecentSection() {
  return (
    <JobOfferSection
      title="최근에 올라온 구인글"
      fetchFunction={fetchRecentOffer}
    />
  );
}
