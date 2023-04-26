import styled from 'styled-components';
import { useCallback, useMemo } from 'react';

import { baseTheme } from '@/theme';
import { useSizeType } from '@/context/sizeTypeContext';
import { Banner as BannerVO } from '@/service/banner';

const carouselConfig = {
  delay: 5000,
  translateDuration: 500,
};

/**
 * @typedef {object} HomeCarouselProps
 *
 * @param {{banners: BannerVO[]}}
 * @returns
 */
export default function PseudoBanner({ banners = null }) {


  return (
    <Container>
        
    </Container>
  );
}

const Container = styled.section`

  overflow: hidden;
  cursor: pointer;

`;

