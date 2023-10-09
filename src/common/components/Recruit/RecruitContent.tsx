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

  const { width, gap } = useMemo(
    () => LayoutSettingMap[screenType as keyof typeof LayoutSettingMap],
    [screenType],
  );

  const { offers, vertical } = useMemo(
    () => getConfigUsingScreenType(screenType, items, is),
    [items, screenType, is],
  );

  return (
    <Container>
      <Movement moveX={calculateMoveX(cursor, width as number, gap)} gap={gap} vertical={vertical}>
        <JobOfferMapContent
          offerWidth={width}
          offers={offers}
          onClick={(o) => open(o.id)}
          onBookmarkClick={(o) => toggle(o.id)}
          rowLayoutConfig={DefaultRowLayoutSetting}
        />
      </Movement>
    </Container>
  );
};

export default RecruitContent;

const getConfigUsingScreenType = (
  screenType: string,
  items: Offer[],
  isBookmark: (_: number) => boolean,
) =>
  screenType === 'mobile'
    ? {
        offers: items.slice(0, 4).map((e) => parseUIOffer(e, isBookmark)),
        vertical: true,
      }
    : {
        offers: items.map((e) => parseUIOffer(e, isBookmark)),
        vertical: false,
      };

const calculateMoveX = (cursor: number, width: number, gap: number) => -cursor * (width + gap);

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
    gap: 20,
    width: 250,
  },
  tablet: {
    gap: 25,
    width: 220,
  },
  mobile: {
    gap: 20,
    width: '100%',
  },
};

const DefaultRowLayoutSetting = {
  height: 120,
  gap: 20,
};
