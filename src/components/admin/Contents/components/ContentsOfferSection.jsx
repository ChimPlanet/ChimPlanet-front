import styled from "styled-components";
import { JobOfferMapContent } from '@/common/components/JobOffer';
import pseudoOffers from '../__mocks__/pseudoOffers';

export default function ContnentsOfferSection() {
    //console.log(theme.widths.tablet)
    return(
        <Container>
            <JobOfferContainer >
                <JobOfferMapContent jobs={pseudoOffers}/>
            </JobOfferContainer>
        </Container>
    )
}

const Container = styled.div`
    ${({ theme }) => theme.media.tablet`
    ${`max-width: ${theme.widths.tablet}px`};
  `};
`;

const JobOfferContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  justify-items: center;
  gap: 20px;
  row-gap: 70px;
`;