import PropTypes from 'prop-types';

/**
 * @typedef {Object} SearchMetadata
 * @property {string[]} words
 * @property {"normal" | "tag"} type
 *
 * @param {{metadata: SearchMetadata}}
 */
export default function SearchResult({ metadata }) {
  return <></>;
}

SearchResult.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
};
