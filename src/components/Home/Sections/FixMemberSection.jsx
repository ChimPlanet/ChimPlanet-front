import { JobOfferSection } from '@/common/components/JobOffer';
import { OFFICIAL_PATH } from '@/constants/route';
import backend from '@/service/backend';
import { useSizeType } from '@/context/sizeTypeContext';

export default function FixMemberSection() {
  const sizeType = useSizeType();

  return (
    <JobOfferSection
      queryKey="member"
      title="고멤 구인글"
      fetchFunction={backend.offers.official}
      hideArrow={sizeType === 'mobile'}
      maxLength={sizeType === 'mobile' && 4}
      goTo={OFFICIAL_PATH}
    />
  );
}
