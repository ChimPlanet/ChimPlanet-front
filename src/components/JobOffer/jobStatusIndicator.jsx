import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  padding: 13px 0px;
`;

const Indicator = styled.span`
  font-size: 13px;
  padding: 2px 13px;
  /* padding-top: 5px; */
  border: ${({ color }) => `1px solid ${color}`};
  border-radius: 4px;
  color: ${({ color }) => color};
`;

/**
 * @typedef {object} JobStatusIndicatorProps
 * @property {boolean} isClosed
 *
 * @param {JobStatusIndicatorProps}
 * @returns
 */
export default function JobStatusIndicator({ isClosed }) {
  return (
    <Container>
      <Indicator color={isClosed ? '#ED2040' : '#00BD2F'}>
        {isClosed ? '마감' : '구인 중'}
      </Indicator>
    </Container>
  );
}

JobStatusIndicator.propTypes = {
  isClosed: PropTypes.bool.isRequired,
};
