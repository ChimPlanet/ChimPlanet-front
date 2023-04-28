import { Link, styled } from 'chimplanet-ui';

import { usePreloadContext } from '@/context/preloadContext';
import { useMemo, useState } from 'react';
import { getFamilyTree } from '@/utils';

import { styled as mStyled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { ChevronDown } from 'chimplanet-ui/icons';

export default function CategoryLinkAccordion({ close }) {
  const [expandedId, setExpandedId] = useState(null);

  const { tags } = usePreloadContext();

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
          <AccordionSummary data-selected={expandedId === parent.tagId}>
            <Parent data-selected={expandedId === parent.tagId}>
              {parent.tagName}
              <Icon children={<ChevronDown />} />
            </Parent>
          </AccordionSummary>
          <AccordionDetails onClick={close}>
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
  color: '#101C33';
  font-size: 14px;
  font-weight: 700;

  & svg {
    display: none;
  }

  &[data-selected='true'] {
    color: #00bd2f;
  }

  &[data-selected='true'] svg {
    display: inline;
    color: #101c33;
  }
`;

const Child = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px 0px 10px 30px;
  font-size: 14px;
  font-weight: 500;
  color: #444444;
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
  ({ theme }) => ({
    backgroundColor: '#fff',
    // theme.palette.mode === 'dark'
    //   ? 'rgba(255, 255, 255, .05)'
    //   : 'rgba(0, 0, 0, .03)',
    paddingLeft: '30px',
    paddingRight: '26px',
    flexDirection: 'row-reverse',
    minHeight: 40,
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      // marginLeft: theme.spacing(1),
    },
    '&[data-selected="true"]': {
      background: '#F5F6F7',
    },
  }),
);

const AccordionDetails = mStyled(MuiAccordionDetails)({
  background: '#F5F6F7',
  padding: 0,
});
