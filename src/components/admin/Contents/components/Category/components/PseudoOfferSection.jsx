import { memo } from 'react';
import styled from 'styled-components';

import { JobOfferMapContent } from '@/common/components/JobOffer';
import { SectionLeftIcon, SectionRightIcon } from '@/common/icons';
import pseudoOffers from '../../../__mocks__/pseudoOffers';
import ResizableGrid from '@/common/components/ResizableGrid';


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

const Container = styled.div`
  pointer-events: none;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionHeaderSide = styled.div`
  display: grid;
  grid-template-columns: 100px 70px;
`;

const DetailLink = styled.span`
  color: #8e94a0;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  & svg {
    fill: #aab1bc;
    color: #aab1bc;
  }
`;

const Title = styled.p`
  font-size: 22px;
  font-weight: 700;
`;
