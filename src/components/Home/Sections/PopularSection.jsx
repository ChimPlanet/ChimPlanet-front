import { JobOfferSection } from '@/common/components/JobOffer';
import { useSizeType } from '@/context/sizeTypeContext';
import backend from '@/service/backend';

export default function PopularSection() {
  const sizeType = useSizeType();

  return (
    <JobOfferSection
      hideArrow={sizeType === 'mobile'}
      queryKey="popular"
      title="인기 구인글"
      fetchFunction={backend.offers.popular}
      maxLength={sizeType === 'mobile' && 4}
    />
  );
}
