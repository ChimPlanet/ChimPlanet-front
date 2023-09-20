import { Link, styled, useCurrentTheme } from '@chimplanet/ui';

import { getFamilyTree } from '@utils';
import { useMemo, useState } from 'react';

import { ChevronDown } from '@chimplanet/ui/icons';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { styled as mStyled } from '@mui/material/styles';
import { getLocalStorageValue } from '@utils/localStorage';

export default function CategoryLinkAccordion({ close }) {
  const [expandedId, setExpandedId] = useState(null);

  const { tags } = getLocalStorageValue('tags');

  const theme = useCurrentTheme();

  const [ancestors, familyTree] = useMemo(() => {
    const familyTree = getFamilyTree(tags);

    return [Array.from(familyTree.keys()), familyTree];
  }, [tags]);

  const handleChange = (id) => (event, isExpanded) => {
    setExpandedId(isExpanded ? id : false);
  };

  const makeSearchQuery = (word) =>
    `/search?type=tag&q=${encodeURIComponent(word)}`;

  return (
    <Container>
      {ancestors.map((parent) => (
        <Accordion
          key={parent.tagId}
          expanded={expandedId === parent.tagId}
          onChange={handleChange(parent.tagId)}
        >
          <AccordionSummary
            background={theme.bgColors.quaternary}
            activebackground={theme.bgColors.septenary}
            data-selected={expandedId === parent.tagId}
          >
            <Parent data-selected={expandedId === parent.tagId}>
              {parent.tagName}
              <Icon children={<ChevronDown />} />
            </Parent>
          </AccordionSummary>
          <AccordionDetails
            background={theme.bgColors.septenary}
            onClick={close}
          >
            <Child to={makeSearchQuery(parent.tagName)}>{parent.tagName}</Child>
            {familyTree.get(parent).map((child) => (
              <Child key={child.tagId} to={makeSearchQuery(child.tagName)}>
                {child.tagName}
              </Child>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}

const Container = styled.div``;

const Parent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 700;

  background-color: ${({ theme }) => theme.bgColors.quaternary};
  color: ${({ theme }) => theme.textColors.primary};

  & svg {
    display: none;
  }

  &[data-selected='true'] {
    color: ${({ theme }) => theme.specialColors.positive};
    background-color: ${({ theme }) => theme.bgColors.septenary};
  }

  &[data-selected='true'] svg {
    display: inline;
  }
`;

const Child = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px 0px 10px 30px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColors.octonary};
`;

const Icon = styled.div``;

const Accordion = mStyled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))({
  border: `none`,
  padding: '0px 0px',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
});

const AccordionSummary = mStyled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme, background, activebackground }) => ({
    backgroundColor: background,
    // theme.palette.mode === 'dark'
    //   ? 'rgba(255, 255, 255, .05)'
    //   : 'rgba(0, 0, 0, .03)',
    paddingLeft: '30px',
    paddingRight: '26px',
    flexDirection: 'row-reverse',
    minHeight: 40,
    transition: 'none',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      // transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      // marginLeft: theme.spacing(1),
    },
    '&[data-selected="true"]': {
      background: activebackground,
    },
  }),
);

const AccordionDetails = mStyled(MuiAccordionDetails)(({ background }) => ({
  background: background,
  padding: 0,
}));
