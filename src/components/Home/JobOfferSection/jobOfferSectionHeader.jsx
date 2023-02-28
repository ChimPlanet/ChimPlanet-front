import SectionLeftIcon from '@/components/icons/SectionLeftIcon';
import SectionRightIcon from '@/components/icons/SectionRightIcon';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  user-select: none;
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto 60px;
`;

const Title = styled.h1``;

const ControlBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Arrow = styled.span`
  cursor: pointer;

  & svg {
    fill: ${({ enable, theme }) => (enable ? theme.colors.main : '#AAB1BC')};
  }
`;

/**
 * @param {{title: string, isNext: boolean, isPrev: boolean, nextPage():void, prevPage():void}}
 * @returns
 */
export default function JobOfferSectionHeader({
  title,
  isNext,
  isPrev,
  nextPage,
  prevPage,
}) {
  return (
    <Container>
      <Title>{title}</Title>
      <ControlBox>
        <Arrow enable={isPrev} onClick={prevPage}>
          <SectionLeftIcon />
        </Arrow>
        <Arrow enable={isNext} onClick={nextPage}>
          <SectionRightIcon />
        </Arrow>
      </ControlBox>
    </Container>
  );
}

JobOfferSectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
