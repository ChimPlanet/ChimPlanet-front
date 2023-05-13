import { JobOfferSection } from '@/common/components/JobOffer';
import { useScreenType } from 'chimplanet-ui';
import backend from '@/service/backend';
import { POPULAR_PATH } from '@/constants/route';

export default function PopularSection() {
  const sizeType = useScreenType();

  return (
    <JobOfferSection
      hideArrow={sizeType === 'mobile'}
      goTo={POPULAR_PATH}
      queryKey="popular"
      title="인기 구인글"
      fetchFunction={backend.offers.popular}
      maxLength={sizeType === 'mobile' && 4}
    />
  );
}
