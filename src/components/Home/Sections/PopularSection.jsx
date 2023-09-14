import { useScreenType } from '@chimplanet/ui';
import { JobOfferSection } from '@common/components/JobOffer';
import { Paths } from '@routes';
import backend from '@services/backend';

export default function PopularSection() {
  const sizeType = useScreenType();

  return (
    <JobOfferSection
      hideArrow={sizeType === 'mobile'}
      goTo={Paths.Popular}
      queryKey="popular"
      title="인기 구인글"
      fetchFunction={backend.offers.popular}
      maxLength={sizeType === 'mobile' && 4}
    />
  );
}
