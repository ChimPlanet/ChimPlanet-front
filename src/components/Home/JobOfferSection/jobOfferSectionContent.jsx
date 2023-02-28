import { usePopularJobOffer } from '@/query/job';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

/**
 * @param {{page: number, perPage: number}}
 * @returns
 */
export default function JobOfferSectionContent({ page, perPage }) {
  const { data: offers } = usePopularJobOffer();

  return <Container></Container>;
}

JobOfferSectionContent.propTypes = {};
