import { JobViewContextProvider, useJobViewReducer } from '../JobViewContext';

/**
 *
 * @param {{metadata: import("components/Search/SearchResult").SearchMetadata, children: import("react").ReactNode}} param0
 * @returns
 */
export default function JobView({ children, metadata }) {
  const contextHandler = useJobViewReducer(metadata);

  return (
    <JobViewContextProvider value={contextHandler}>
      {children}
    </JobViewContextProvider>
  );
}
