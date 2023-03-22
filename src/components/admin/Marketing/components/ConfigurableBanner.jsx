import Banner from '@/components/Banner';
import styled from 'styled-components';

export default function ConfigurableBanner() {
  return (
    <Container>
      <Banner />
    </Container>
  ); 
}

const Container = styled.div`
  margin-top: 25px; 
  height: 375px; 
  background-color: #d9d9d9;
`;
