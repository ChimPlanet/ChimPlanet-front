import { JobOfferSection } from '@/common/components/JobOffer';
import { OFFICIAL_PATH } from '@/constants/route';
import backend from '@/service/backend';
import { useScreenType } from 'chimplanet-ui';

export default function OfficialSection() {
  const sizeType = useScreenType();

  return (
    <JobOfferSection
      queryKey="official"
      title="공식 콘텐츠 구인글"
      fetchFunction={backend.official.list}
      hideArrow={sizeType === 'mobile'}
      maxLength={sizeType === 'mobile' && 4}
      goTo={OFFICIAL_PATH}
    />
  );
}
