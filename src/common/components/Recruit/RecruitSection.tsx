import { Link, Recruit, styled } from '@chimplanet/ui';
import { SectionLeftIcon, SectionRightIcon } from '@common/icons';
import { ComponentProps, Suspense, useMemo } from 'react';
import RecruitContent from './RecruitContent';
import RecruitData from './RecruitData';

interface Props {
  goto?: string;
  title: string;
  payload: ComponentProps<typeof RecruitData>['payload'];
}

export const RecruitSection = ({ goto, title, payload }: Props) => {
  const renderControl = useMemo(() => createControlRenderer(goto), [goto]);

  return (
    <Recruit>
      <Recruit.Header as="h2" renderControl={renderControl}>
        {title}
      </Recruit.Header>
      <Suspense>
        <RecruitData payload={payload}>{(items) => <RecruitContent items={items} />}</RecruitData>
      </Suspense>
    </Recruit>
  );
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
