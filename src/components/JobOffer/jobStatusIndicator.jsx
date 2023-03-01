import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  padding: 13px 0px;
  font-size: 12px;
  font-weight: 500;
`;

const Indicator = styled.span`
  padding: 2px 13px;
  /* padding-top: 5px; */
  border: ${({ color }) => `1px solid ${color}`};
  border-radius: 4px;
  color: ${({ color }) => color};
  margin-right: 8px;
  font-style: normal;
`;

/**
 * @typedef {object} JobStatusIndicatorProps
 * @property {boolean} isClosed
 * @property {boolean} isRegular
 * @property {boolean} isCreate
 *
 * @param {JobStatusIndicatorProps}
 * @returns
 */
export default function JobStatusIndicator({ isClosed, isRegular, isCreate }) {
  return (
    <Container>
      <Indicator color={isClosed ? '#ED2040' : '#00BD2F'}>
        {isClosed ? '마감' : '구인 중'}
      </Indicator>
      {isCreate && <Indicator color="#969696">팀 창설</Indicator>}
      {isRegular && <Indicator color="#969696">상시모집</Indicator>}
    </Container>
  );
}

JobStatusIndicator.propTypes = {
  isClosed: PropTypes.bool.isRequired,
  isRegular: PropTypes.bool.isRequired,
  isCreate: PropTypes.bool.isRequired,
};
