import { styled, useScreenType } from '@chimplanet/ui';
import { useMemo } from 'react';

import useBanner from '@hooks/useBanner';
import { Banner } from '@services/entity';

const DEFAULT_MID_BANNER: Pick<Banner, 'to' | 'redirectType' | 'imageUrl' | 'fileName'> = {
  to: '',
  redirectType: 'NewTab',
  imageUrl: '',
  fileName: '',
};

export default function SubBanner() {
  const screenType = useScreenType();
  const { mid } = useBanner();

  const { to, redirectType, imageUrl, fileName } = useMemo(
    () => (mid ? mid[screenType === 'desktop' ? 'pc' : 'mobile'] : DEFAULT_MID_BANNER),
    [mid, screenType],
  );

  return (
    <Container href={to} target={redirectType === 'NewTab' ? '_blank' : '_self'}>
      <SubBannerImage src={imageUrl} alt={fileName} />
    </Container>
  );
}

const Container = styled.a`
  display: block;
  background-color: #d9d9d9;

  margin-top: 65px;
  margin-bottom: 65px;
  height: 108px;
  border-radius: 8px;
  overflow: hidden;
  width: ${({ theme }) => theme.widths.desktop}px;

  ${({ theme }) => theme.media.tablet`
    ${`
      width: ${theme.widths.tablet}px;
      height: auto;

      aspect-ratio: 370 / 43;
    `}
  `}
  ${({ theme }) => theme.media.mobile`
    ${`
      width: 350px;
      height: auto;

      aspect-ratio: 370 / 43;
    `}
  `};
`;

const SubBannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
