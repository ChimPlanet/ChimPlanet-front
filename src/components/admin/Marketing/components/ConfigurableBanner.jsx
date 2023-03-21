import styled from 'styled-components';

import Banner from '@/components/Banner';

export default function ConfigurableBanner() {

  // ! use RecoilState for shareing Sidebar Menu Setting
  const banners = [];

  return (
     <Container>
      <Banner banners={banners} />
    </Container>
  ); 
}

const Container = styled.div`
  margin: 30px 0px;
  box-style: border-box;
  height: 375px;

  &:hover {
    border: 4px solid ${({theme}) => theme.colors.logo}
  }

`;
