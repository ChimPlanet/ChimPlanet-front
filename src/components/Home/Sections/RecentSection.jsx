import { ErrorBoundary, JobOfferMapContent, Loading, styled, useScreenType } from '@chimplanet/ui';
import { Suspense } from 'react';

import { FallbackFetching } from '@common/components/FallbackFetching';
import { LinkFooter } from '@common/components/LinkFooter';
import { useArticle } from '@components/ArticleRenderer/hook';
import useBookmark from '@hooks/useBookmark';
import { useQuery } from '@hooks/useQuery';
import { Paths } from '@routes';
import { parseUIOffer } from '@services/entity';
import MoreOfferButton from '../MoreOfferButton';

export default function RecentSection() {
  return (
    <Container>
      <Title>최근에 올라온 구인글</Title>
      <ErrorBoundary fallback={<Loading />}>
        <Suspense fallback={<FallbackFetching />}>
          <RecentSectionContent />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
}

function RecentSectionContent() {
  const { data } = useQuery('offers', { type: 'recent' });
  const [, { open }] = useArticle();

  const screenType = useScreenType();
  const { toggle, is } = useBookmark();

  const { column, width, threshold, direction, rowConfig } = OfferConfig[screenType];

  return (
    <>
      <JobContent column={column}>
        <JobOfferMapContent
          offers={data.slice(0, threshold).map((it) => parseUIOffer(it, is))}
          offerWidth={width}
          direction={direction}
          rowLayoutConfig={rowConfig}
          onBookmarkClick={toggle}
          onClick={open}
        />
      </JobContent>
      {screenType === 'mobile' ? (
        <LinkFooter text="자세히보기" href={Paths.Job} />
      ) : (
        <MoreOfferButton />
      )}
    </>
  );
}

const OfferConfig = {
  desktop: {
    column: 4,
    width: 250,
    threshold: 8,
    direction: 'column',
  },
  tablet: {
    column: 3,
    width: 220,
    threshold: 6,
    direction: 'column',
  },
  mobile: {
    column: 1,
    width: '100%',
    threshold: 6,
    direction: 'row',
    rowConfig: {
      height: 120,
      gap: 20,
    },
  },
};

const Container = styled.div`
  margin-top: 65px;
  min-height: 700px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;

const JobContent = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  gap: 20px;
  row-gap: 60px;

  ${({ theme }) => theme.media.mobile`
    row-gap: 20px;
  `}
`;
