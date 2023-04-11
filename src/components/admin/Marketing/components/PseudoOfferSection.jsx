import { memo } from 'react';

import { JobOfferMapContent } from '@/common/components/JobOffer';
import { SectionLeftIcon, SectionRightIcon } from '@/common/icons';
import pseudoOffers from '../__mocks__/pseudoOffers';
import ResizableGrid from '@/common/components/ResizableGrid';

import {
  Container,
  SectionHeader,
  SectionHeaderSide,
  DetailLink,
  NavButtons,
  Title,
} from './PseudoOfferSection.style';

export default function PseudoOfferSection({ title, numOfLines = 1 }) {
  return (
    <Container>
      <SectionHeader>
        <Title>{title}</Title>
        <SectionHeaderSide>
          <DetailLink>자세히보기</DetailLink>
          <NavButtons>
            <SectionLeftIcon />
            <SectionRightIcon />
          </NavButtons>
        </SectionHeaderSide>
      </SectionHeader>
      <ResizableGrid style={{ rowGap: 50, columnGap: 20 }}>
        <PseudoJobOfferMapContent numOfLines={numOfLines} />
      </ResizableGrid>
    </Container>
  );
}

const PseudoJobOfferMapContent = memo(({ columns, numOfLines }) => (
  <JobOfferMapContent jobs={pseudoOffers.slice(0, columns * numOfLines)} />
));
