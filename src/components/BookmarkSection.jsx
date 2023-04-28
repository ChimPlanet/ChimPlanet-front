import { styled, useScreenType } from 'chimplanet-ui';

import { useJobOfferByArrayId } from '@/query/offer';
import { JobOfferMapContent } from '@/common/components/JobOffer';

import { BookmarkContext } from '@/utils/Context/bookmarkContext';

export default function BookmarkSection() {
  const { data: offers } = useJobOfferByArrayId(
    BookmarkContext.getInstance().get(),
  ); // ! 테스트용 임시 호출
  const sizeType = useScreenType();

  return (
    <Container column={sizeType === 'desktop' ? 4 : 3}>
      <JobOfferMapContent jobs={offers} />
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  gap: 20px;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
`;
