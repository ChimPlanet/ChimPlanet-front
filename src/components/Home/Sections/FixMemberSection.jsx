import { useScreenType } from '@chimplanet/ui';
import { JobOfferSection } from '@common/components/JobOffer';
import backend from '@services/backend';

export default function FixMemberSection() {
  const sizeType = useScreenType();

  return (
    <JobOfferSection
      queryKey="member"
      title="이세돌, 고멤 구인글"
      fetchFunction={backend.official.official}
      hideArrow={sizeType === 'mobile'}
      maxLength={sizeType === 'mobile' && 4}
    />
  );
}
