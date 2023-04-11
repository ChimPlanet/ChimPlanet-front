import styled from 'styled-components';

import ContentsSearch from './ContentsSearch';
import useJobSection from '@/common/components/JobOffer/hooks/useJobSection';

export default function ContentsHeader({ onActiveTab, activeTab }) {
  //const [activeTab, setActiveTab] = useState('게시글');
  const { context } = useJobSection();

  const TabActive = (e) => {
    onActiveTab(e.target.innerText);
  };

  return (
    <Container>
      <Header width={`${context.perPage * 320 - 20}px`}>
        <Title>게시글 및 태그</Title>
        <NavContainer>
          <Menu>
            <MenuItem onClick={TabActive} active={'게시글' === activeTab}>
              게시글
            </MenuItem>
            <MenuItem onClick={TabActive} active={'태그' === activeTab}>
              태그
            </MenuItem>
          </Menu>
          <ContentsSearch />
        </NavContainer>
      </Header>
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px solid #cdcfd6;
  font-family: 'Pretendard Variable';
  font-style: normal;
`;

const Header = styled.header`
  padding: 32px;
  padding-bottom: 0;
  max-width: ${(props) => props.width};
`;

const Title = styled.p`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  font-size: 24px;
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 16px;
`;

const Menu = styled.div``;

const MenuItem = styled.span`
  margin-right: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 15px;
  cursor: pointer;
  border-radius: 4px 4px 0px 0px;
  border-bottom: ${({ theme, active }) =>
    active ? `2px solid ${theme.colors.logo}` : 'none'};
  &:hover {
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.border}`};
  }
`;
