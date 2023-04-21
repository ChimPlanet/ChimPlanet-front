import { JobOfferSection } from '@/common/components/JobOffer';
import { EVENT_PATH } from '@/constants/route';
import backend from '@/service/backend';
import { useSizeType } from '@/context/sizeTypeContext';

export default function EventSection() {
  const sizeType = useSizeType();

  return (
    <JobOfferSection
      queryKey="event"
      title="이벤트 구인글"
      fetchFunction={backend.offers.event}
      hideArrow={sizeType === 'mobile'}
      maxLength={sizeType === 'mobile' && 4}
      goTo={EVENT_PATH}
    />
  );
}
