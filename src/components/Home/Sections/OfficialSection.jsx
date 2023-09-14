import { useScreenType } from '@chimplanet/ui';
import { JobOfferSection } from '@common/components/JobOffer';
import { Paths } from '@routes';
import backend from '@services/backend';

export default function OfficialSection() {
  const sizeType = useScreenType();

  return (
    <JobOfferSection
      queryKey="official"
      title="공식 콘텐츠 구인글"
      fetchFunction={backend.official.list}
      hideArrow={sizeType === 'mobile'}
      maxLength={sizeType === 'mobile' && 4}
      goTo={Paths.Official}
    />
  );
}
