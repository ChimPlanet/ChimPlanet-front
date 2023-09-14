import { useScreenType } from '@chimplanet/ui';
import { JobOfferSection } from '@common/components/JobOffer';
import backend from '@services/backend';

export default function IsegyeSection() {
  const sizeType = useScreenType();

  return (
    <JobOfferSection
      queryKey="isegye"
      title="이세돌 구인글"
      fetchFunction={backend.official.official}
      hideArrow={sizeType === 'mobile'}
      maxLength={sizeType === 'mobile' && 4}
    />
  );
}
