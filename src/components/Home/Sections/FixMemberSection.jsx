import { JobOfferSection } from '@/common/components/JobOffer';
import { OFFICIAL_PATH } from '@/constants/route';
import backend from '@/service/backend';
import { useScreenType } from 'chimplanet-ui';

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
