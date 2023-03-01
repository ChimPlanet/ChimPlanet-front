import { usePopularJobOffer } from '@/query/job';
import styled from 'styled-components';
import JobOfferMapContent from './JobOffer/jobOfferMapContent';
import { useSizeType } from '@/context/sizeTypeContext';

const Container = styled.section`
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
`;

export default function BookmarkSection() {
  const { data: offers } = usePopularJobOffer(); // ! 테스트용 임시 호출
  const sizeType = useSizeType();

  return (
    <Container column={sizeType === 'desktop' ? 4 : 3}>
      <JobOfferMapContent jobs={offers} />
    </Container>
  );
}
