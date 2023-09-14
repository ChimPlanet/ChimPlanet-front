import { styled, useNavigate } from '@chimplanet/ui';
import { ChevronLeft } from '@chimplanet/ui/icons';
import { Paths } from '@routes';
import { useMemo } from 'react';

export const AlternativeHeader = ({ pathname }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const text = useMemo(
    () => (pathname.startsWith(Paths.Job) ? '전체' : '검색'),
    [pathname],
  );

  return (
    <Container>
      <Button onClick={handleBack}>
        <ChevronLeft />
      </Button>
      <Text>{text}</Text>
    </Container>
  );
};

export default AlternativeHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const Button = styled.button`
  margin-left: 15px;
`;

const Text = styled.p`
  /* flex: 1; */
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  margin: auto;
  margin-left: 36px;
`;
