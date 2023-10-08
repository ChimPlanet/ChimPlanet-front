import { JobOfferMapContent, styled, useRecruitContextState, useScreenType } from '@chimplanet/ui';
import { useArticle } from '@components';
import useBookmark from '@hooks/useBookmark';
import { Offer, parseUIOffer } from '@services/entity';
import { useMemo } from 'react';

interface Props {
  items: Offer[];
}
export const RecruitContent = ({ items }: Props) => {
  const [, { open }] = useArticle();
  const { toggle, is } = useBookmark();
  const screenType = useScreenType();
  const { cursor } = useRecruitContextState();

  const layoutConfig = useMemo(
    () => LayoutSettingMap[screenType as keyof typeof LayoutSettingMap],
    [screenType],
  );

  return (
    <Container>
      <Movement
        moveX={-cursor * ((layoutConfig.width as number) + layoutConfig.columnGap)}
        gap={layoutConfig.columnGap}
        vertical={screenType === 'mobile'}
      >
        <JobOfferMapContent
          offerWidth={layoutConfig.width}
          offers={items.map((e) => parseUIOffer(e, is))}
          onClick={(offer) => open(offer.id)}
          onBookmarkClick={(offer) => toggle(offer.id)}
          rowLayoutConfig={DefaultRowLayoutSetting}
        />
      </Movement>
    </Container>
  );
};

export default RecruitContent;

const Container = styled.div`
  overflow-x: hidden;
`;

const Movement = styled.div<{ vertical: boolean; gap: number; moveX: number }>`
  margin-top: 20px;
  display: flex;
  width: fit-content;
  transition: transform 0.2s ease-in-out;
  flex-direction: ${(p) => (!p.vertical ? 'row' : 'column')};
  gap: ${(p) => `${p.gap}px`};
  transform: ${(p) => `translate3d(${p.moveX}px, 0px, 0px)`};
`;

const LayoutSettingMap = {
  desktop: {
    columnGap: 20,
    width: 250,
  },
  tablet: {
    columnGap: 25,
    width: 220,
  },
  mobile: {
    columnGap: 20,
    width: '100%',
  },
};

const DefaultRowLayoutSetting = {
  height: 120,
  gap: 20,
};
