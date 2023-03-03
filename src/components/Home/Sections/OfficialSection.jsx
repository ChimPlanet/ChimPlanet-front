import fetchOfficialOffer from '@/api/job/fetchOfficialOffer';
import JobOfferSection from '@/components/JobOffer/JobOfferSection';
import { Link } from 'react-router-dom';
import { OFFICIAL_PATH } from '@/constants/route';
import styled from 'styled-components';

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
