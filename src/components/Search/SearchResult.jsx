import PropTypes from 'prop-types';

/**
 *
 * @param {{words: string[]}}
 */
export default function SearchResult({ words }) {
  return <></>;
}

SearchResult.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
};
