import { Recruit } from '@chimplanet/ui';
import { SectionLeftIcon, SectionRightIcon } from '@common/icons';
import { Suspense } from 'react';
import { RecruitData } from './RecruitData';

export const RecruitSection = () => {
  return (
    <Recruit>
      <Recruit.Header
        title={<h1>공식 콘텐츠 구인글</h1>}
        renderControl={renderControl}
      />
      <Suspense>
        <RecruitData>
          {(items) => (
            <Recruit.Items
              items={items}
              renderItem={(item) => <>{item.boardTitle}</>}
            />
          )}
        </RecruitData>
      </Suspense>
    </Recruit>
  );
};

const renderControl = ({ isNext, isPrev, nextPage, prevPage }) => (
  <>
    <button onClick={prevPage} disabled={!isPrev}>
      <SectionLeftIcon />
    </button>
    <button onClick={nextPage} disabled={!isNext}>
      <SectionRightIcon />
    </button>
  </>
);
