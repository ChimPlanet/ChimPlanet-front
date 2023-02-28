import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

/**
 * @param {{title: string}}
 * @returns
 */
export default function JobOfferSectionHeader({ title }) {
  return <Container></Container>;
}

JobOfferSectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
