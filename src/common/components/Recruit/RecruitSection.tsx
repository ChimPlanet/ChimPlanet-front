import { Link, Recruit, styled, useRecruitContextUpdater, useScreenType } from '@chimplanet/ui';
import { ChevronRight } from '@chimplanet/ui/icons';
import { SectionLeftIcon, SectionRightIcon } from '@common/icons';
import JobSelectionSkeleton from '@components/Skeletons/JobSectionSkeleton';
import { ComponentProps, Fragment, Suspense, useLayoutEffect, useMemo } from 'react';
import RecruitContent from './RecruitContent';
import RecruitData from './RecruitData';

interface Props {
  goto?: string;
  title: string;
  payload: ComponentProps<typeof RecruitData>['payload'];
}

export const RecruitSection = ({ goto, title, payload }: Props) => {
  const renderControl = useMemo(() => createControlRenderer(goto), [goto]);
  const screenType = useScreenType();

  return (
    <Recruit>
      <Recruit.Header as="h2" renderControl={renderControl}>
        {title}
      </Recruit.Header>
      <Suspense fallback={<JobSelectionSkeleton />}>
        <RecruitData payload={payload}>
          {(items) => (
            <Fragment>
              <RecruitContextUpdater screenType={screenType} itemLength={items.length} />
              <RecruitContent items={items} />
            </Fragment>
          )}
        </RecruitData>
      </Suspense>
      {screenType === 'mobile' && (
        <Footer to={goto ?? ''}>
          자세히보기
          <ChevronRight />
        </Footer>
      )}
    </Recruit>
  );
};

interface RecruitContextUpdaterProps {
  itemLength: number;
  screenType: string;
}

export const RecruitContextUpdater = ({ itemLength = 4 }: RecruitContextUpdaterProps) => {
  const update = useRecruitContextUpdater();
  const screenType = useScreenType();

  useLayoutEffect(() => {
    update({ length: itemLength, cursor: 0, perPage: screenType === 'desktop' ? 4 : 3 });
  }, [itemLength, screenType, update]);

  return <Fragment />;
};

export default RecruitSection;

const createControlRenderer =
  (goto?: string): NonNullable<ComponentProps<typeof Recruit.Header>['renderControl']> =>
  ({ isNext, isPrev, nextPage, prevPage }) => (
    <Controls>
      {goto && <HyperLink to={goto}>자세히보기</HyperLink>}
      <Navigation>
        <button onClick={prevPage} disabled={!isPrev}>
          <SectionLeftIcon />
        </button>
        <button onClick={nextPage} disabled={!isNext}>
          <SectionRightIcon />
        </button>
      </Navigation>
    </Controls>
  );

const HyperLink = styled(Link)`
  margin-right: 30px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColors.tertiary};
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const Navigation = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
  button svg {
    height: 18px;
    vertical-align: middle;
    margin: auth 0;
    fill: ${({ theme }) => theme.textColors.primary};
  }

  button[disabled] svg {
    fill: ${({ theme }) => theme.textColors.senary};
  }
`;

const Footer = styled(Link)`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  color: ${({ theme }) => theme.specialColors.positive};

  font-size: 16px;
  font-weight: 500;

  & svg {
    margin-top: -2.5px;
  }
`;
