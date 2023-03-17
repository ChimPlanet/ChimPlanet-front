import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SectionLeftIcon, SectionRightIcon } from '@/common/icons';

/**
 * @typedef {Object} JobOfferSectionHeaderProps
 * @property {string} title
 * @property {boolean} isNext
 * @property {boolean} isPrev
 * @property {()=>void} nextPage
 * @property {()=>void} prevPage
 * @property {boolean} hideArrow
 *
 *
 *
 * @param {JobOfferSectionHeaderProps}
 * @returns
 */
export default function JobOfferSectionHeader({
  title,
  isNext,
  isPrev,
  nextPage,
  prevPage,
  hideArrow,
  detail,
}) {
  return (
    <Container>
      <Title>{title}</Title>
      {detail}
      <ControlBox>
        {!hideArrow && (
          <>
            <Arrow enable={isPrev} onClick={prevPage}>
              <SectionLeftIcon />
            </Arrow>
            <Arrow enable={isNext} onClick={nextPage}>
              <SectionRightIcon />
            </Arrow>
          </>
        )}
      </ControlBox>
    </Container>
  );
}

JobOfferSectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

const Container = styled.div`
  user-select: none;
  display: grid;
  grid-template-columns: auto auto 60px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;

const Detail = styled.div`
  align-content: flex-end;
  width: fit-content;
`;

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
