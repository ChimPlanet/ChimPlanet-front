import { BookmarkButton, Link, styled } from '@chimplanet/ui';
import { X } from '@chimplanet/ui/icons';
import { Divider } from '@mui/material';

import { Paths } from '@routes';
import CategoryLinkAccordion from './CategoryLinkAccordion';
import MobileThemeChangeButton from './MobileThemeChangeButton';

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
        {/* <Divider /> */}
        {/* <Anchor to={EVENT_PATH}>이벤트</Anchor> */}
        <Divider />
        <Anchor to={Paths.Official}>공식</Anchor>
        <Divider />
        <MobileThemeChangeButton />
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgColors.quaternary};
  width: 330px;
  padding: 16px 0px;
  min-height: 100%;
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
  padding: 0px 30px;
  background-color: ${({ theme }) => theme.bgColors.quaternary};
`;

const Anchor = styled(Link)`
  display: block;
  padding: 11px 0px;
  margin: 15px 0px;
  font-weight: 700;
  font-size: 14px;
  background-color: ${({ theme }) => theme.bgColors.quaternary};
  color: ${({ theme }) => theme.textColors.primary};
`;

const IconButton = styled.button`
  color: ${({ theme }) => theme.textColors.primary};
  & svg {
    margin: auto;
  }
`;
