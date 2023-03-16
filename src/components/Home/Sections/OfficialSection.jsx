import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { JobOfferSection } from '@/common/components/JobOffer';
import { fetchOfficialOffer } from '@/service/offer/offer.api';
import { OFFICIAL_PATH } from '@/constants/route';

const Detail = styled.div`
  text-align: right;
  margin-top: 2px;
  margin-right: 30px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

export default function OfficialSection() {
  return (
    <JobOfferSection
      queryKey="official"
      title="공식 콘텐츠 구인글"
      fetchFunction={fetchOfficialOffer}
      detail={
        <Detail>
          <Link to={OFFICIAL_PATH}>자세히 보기</Link>
        </Detail>
      }
    />
  );
}
