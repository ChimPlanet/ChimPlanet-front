import { JobOfferSection } from '@/common/components/JobOffer';
import { OFFICIAL_PATH } from '@/constants/route';
import backend from '@/service/backend';
import { useScreenType } from 'chimplanet-ui';

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
