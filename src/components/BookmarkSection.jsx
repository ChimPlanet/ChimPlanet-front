import styled from 'styled-components';
import { useJobOfferByArrayId } from '@/query/job';
import { JobOfferMapContent } from '@/common/components/JobOffer';
import { useSizeType } from '@/context/sizeTypeContext';
import { BookmarkContext } from '@/utils/Context/bookmarkContext';

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
