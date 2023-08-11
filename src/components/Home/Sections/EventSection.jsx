import { JobOfferSection } from '@/common/components/JobOffer';
import backend from '@/service/backend';
import { useScreenType } from '@chimplanet/ui';

export default function EventSection() {
  const sizeType = useScreenType();

  return (
    <JobOfferSection
      queryKey="event"
      title="이벤트 구인글"
      fetchFunction={backend.offers.event}
      hideArrow={sizeType === 'mobile'}
      maxLength={sizeType === 'mobile' && 4}
    />
  );
}
