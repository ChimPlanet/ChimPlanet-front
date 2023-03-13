import JobView from '@/components/JobView';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Loading } from '@/common/components';

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
