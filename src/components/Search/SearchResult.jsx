import { Loading, styled } from '@chimplanet/ui';
import JobView from '@components/JobView';
import { Suspense } from 'react';

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
      <Padding />
      <Suspense fallback={<Loading />}>
        <JobView.Content />
      </Suspense>
    </JobView>
  );
}

const Padding = styled.div`
  height: 16px;
`;
