import fetchRecentOffer from '@/api/job/fetchRecentOffer';
import JobOfferSection from '@/components/JobOffer/JobOfferSection';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 65px;
  min-height: 700px;
`;

export default function RecentSection() {
  return (
    <Container>
      <JobOfferSection
        title="최근에 올라온 구인글"
        fetchFunction={fetchRecentOffer}
        hideArrow={true}
        numOfLines={2}
      />
    </Container>
  );
}
