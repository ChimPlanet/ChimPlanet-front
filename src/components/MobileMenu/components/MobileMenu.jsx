import { BookmarkButton, Link, styled } from 'chimplanet-ui';
import { X } from 'chimplanet-ui/icons';
import { Divider } from '@mui/material';

import CategoryLinkAccordion from './CategoryLinkAccordion';
import { EVENT_PATH, OFFICIAL_PATH } from '@/constants/route';

export default function MobileMenu({ close }) {
  const handlePreventPropagation = (e) => e.stopPropagation();

  return (
    <Container>
      <Header>
        <BookmarkButton />
        <IconButton onClick={close} children={<X />} />
      </Header>
      <CategoryLinkAccordionWrap onClick={handlePreventPropagation}>
        <CategoryLinkAccordion close={close} />
      </CategoryLinkAccordionWrap>
      <Footer>
        <Divider />
        <Anchor to={EVENT_PATH}>이벤트</Anchor>
        <Divider />
        <Anchor to={OFFICIAL_PATH}>공식</Anchor>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.main};
  width: 330px;
  padding: 16px 0px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 20px;
`;

const CategoryLinkAccordionWrap = styled.div`
  margin: 15px 0px;
`;

const Footer = styled.div`
  margin: 0px 30px;
`;

const Anchor = styled(Link)`
  display: block;
  padding: 11px 0px;
  margin: 15px 0px;
  font-weight: 700;
  font-size: 14px;
`;

const IconButton = styled.button`
  & svg {
    margin: auto;
  }
`;
