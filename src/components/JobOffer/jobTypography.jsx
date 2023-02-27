import styled from 'styled-components';
import PropTypes from 'prop-types';
import { toFormatNumber } from '@/utils/number';

const Container = styled.div``;

const Title = styled.h3`
  font-size: 1.25em;
  padding-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Writer = styled.p`
  font-size: 1em;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Detail = styled.span`
  font-size: 14px;
  color: #8e94a0;
`;

/**
 * @typedef {object} JobTypographyProps
 * @property {string} title
 * @property {string} writer
 * @property {number} viewCount
 * @property {string} writeAt
 *
 * @param {JobTypographyProps}
 * @returns
 */
export default function JobTypography({ title, writer, viewCount, writeAt }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Writer>{writer}</Writer>
      <Detail>
        {writeAt} &#183; 조회 {toFormatNumber(viewCount)}
      </Detail>
    </Container>
  );
}

JobTypography.propTypes = {
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  viewCount: PropTypes.number.isRequired,
  writeAt: PropTypes.string.isRequired,
};
