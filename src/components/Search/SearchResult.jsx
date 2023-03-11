import JobView from '@/components/JobView';

/**
 * @typedef {Object} SearchMetadata
 * @property {string[]} words
 * @property {"normal" | "tag"} type
 *
 * @param {{metadata: SearchMetadata}}
 */
export default function SearchResult({ metadata }) {
  return (
    <JobView metadata={metadata}>
      <JobView.Header />
    </JobView>
  );
}
