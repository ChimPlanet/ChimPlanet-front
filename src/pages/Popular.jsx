import {
  JobTableContent,
  JobTableHeader,
  useJobTableContext,
  wrapJobTableContext,
} from '@/components/JobTable';
import { useJobOfferFromDynamic } from '@/query/offer';
import backend from '@/service/backend';
import { styled } from 'chimplanet-ui';
import { useEffect } from 'react';

export const Popular = wrapJobTableContext(() => {
  const [, dispatch] = useJobTableContext();

  const { data } = useJobOfferFromDynamic('popular', backend.offers.popular);

  useEffect(() => {
    dispatch({ originalData: data, pending: 'done' });
  }, [data]);

  return (
    <Container>
      <JobTableHeader />
      <JobTableContent />
    </Container>
  );
});

export default Popular;

const Container = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  row-gap: 25px;
  padding-bottom: 75px;
`;
