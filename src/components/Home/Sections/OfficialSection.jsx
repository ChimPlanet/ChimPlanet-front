import fetchOfficialOffer from '@/api/job/fetchOfficialOffer';
import JobOfferSection from '@/components/JobOfferSection';

export default function OfficialSection() {
  return (
    <JobOfferSection
      title="공식 콘텐츠 구인글"
      fetchFunction={fetchOfficialOffer}
    />
  );
}
