import { useJobOfferByArrayId } from '@/query/job';
import styled from 'styled-components';
import JobOfferMapContent from './JobOffer/jobOfferMapContent';
import { useSizeType } from '@/context/sizeTypeContext';
import { BookmarkContext } from '@/utils/Context/bookmarkContext';
import useBookmark from '@/hooks/useBookmark';

const Container = styled.section`
  display: grid;
  gap: 20px;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
`;

export default function BookmarkSection() {
  const { data: offers } = useJobOfferByArrayId(
    BookmarkContext.getInstance().get(),
  ); // ! 테스트용 임시 호출
  const sizeType = useSizeType();

  return (
    <Container column={sizeType === 'desktop' ? 4 : 3}>
      <JobOfferMapContent jobs={offers} />
    </Container>
  );
}
