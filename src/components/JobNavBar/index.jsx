import { useMemo } from 'react';
import { styled, useScreenType, useTheme } from 'chimplanet-ui';
import { ChevronDown } from 'chimplanet-ui/icons';

export default function JobNavBar({
  total,
  setValue,
  directButton,
  sortValue,
  isEnd,
  select,
  onSelect,
}) {
  const sizeType = useScreenType();
  const theme = useTheme();

  const currentColor = useMemo(() => {
    return sizeType === 'desktop' ? `${theme.textColors.primary}` : '#00E4B3';
  }, [sizeType, theme]);

  const currentBorderColor = useMemo(() => {
    return sizeType === 'desktop' ? '' : `1px solid #00E4B3`;
  }, [sizeType, theme]);

  return (
    <>
      <Box sizeType={sizeType} />
      <NavContainer sizeType={sizeType}>
        <nav>
          <NavListContainer sizeType={sizeType}>
            <NavList
              onClick={(e) => directButton(e, 'ING')}
              sizeType={sizeType}
              current={isEnd.text === '구인중' ? currentBorderColor : '#AAB1BC'}
              color={
                isEnd.text === '구인중'
                  ? currentColor
                  : `${theme.textColors.senary}`
              }
            >
              구인중
            </NavList>
            <NavList
              onClick={(e) => directButton(e, 'END')}
              sizeType={sizeType}
              current={isEnd.text === '모집마감' ? currentBorderColor : ''}
              color={isEnd.text === '모집마감' ? currentColor : '#AAB1BC'}
            >
              모집마감
            </NavList>
            <NavList
              onClick={(e) => directButton(e, 'ALL')}
              sizeType={sizeType}
              current={isEnd.text === '전체' ? currentBorderColor : ''}
              color={isEnd.text === '전체' ? currentColor : '#AAB1BC'}
            >
              전체
            </NavList>
          </NavListContainer>
        </nav>
        <Nav>
          <Total sizeType={sizeType}>총 {total}개</Total>
          <SortContainer sizeType={sizeType}>
            <Sort onClick={onSelect} sizeType={sizeType}>
              {sortValue.text}
              <Icon>
                <ChevronDown color={theme.textColors.primary} />
              </Icon>
            </Sort>
            {select && (
              <OptionContainer sizeType={sizeType}>
                <Option
                  onClick={(e) => setValue(e, 'regDate')}
                  color={sortValue.text === '최신순' ? '#00E4B3' : '#8E94A0'}
                >
                  최신순
                </Option>
                <Option
                  onClick={(e) => setValue(e, 'readCount')}
                  color={sortValue.text === '조회순' ? '#00E4B3' : '#8E94A0'}
                >
                  조회순
                </Option>
                {/* <Option
                  onClick={setValue}
                  color={sortValue === '추천순' ? '#00BD2F' : '#8E94A0'}
                >
                  추천순
                </Option> */}
              </OptionContainer>
            )}
          </SortContainer>
        </Nav>
      </NavContainer>
    </>
  );
}

const Box = styled.div`
  display: ${({ sizeType }) => (sizeType === 'desktop' ? 'none' : '')};
  position: absolute;
  left: 0;
  width: 100%;
  height: 12px;
  background: ${({ theme }) => theme.bgColors.quaternary};
`;

const Icon = styled.span`
  margin-left: 10px;
  & svg {
    vertical-align: middle;
  }
`;

const NavContainer = styled.div`
  display: ${({ sizeType }) => (sizeType === 'desktop' ? '' : 'flex')};
  margin-top: ${({ sizeType }) => (sizeType === 'desktop' ? '30px' : '32px')};
  margin-bottom: 22px;
  border-bottom: ${({ theme, sizeType }) =>
    sizeType === 'desktop' ? '' : `1px solid ${theme.borderColors.primary};`};
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
`;

const NavListContainer = styled.ul`
  display: flex;
  flex-direction: ${({ sizeType }) =>
    sizeType === 'desktop' ? '' : 'row-reverse'};
  margin-bottom: ${({ sizeType }) => (sizeType === 'desktop' ? '40px' : '')};
  font-size: ${({ sizeType }) => (sizeType === 'desktop' ? '24px' : '16px')};
`;

const NavList = styled.li`
  font-weight: 700;
  line-height: 29px;
  color: ${({ color }) => color};
  margin-right: 24px;
  padding-bottom: ${({ sizeType }) => (sizeType === 'desktop' ? '' : '15px')};
  cursor: pointer;
  border-bottom: ${({ current }) => current};
`;

const Total = styled.div`
  display: ${({ sizeType }) => (sizeType === 'desktop' ? '' : 'none')};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.textColors.primary};
`;

const SortContainer = styled.div`
  position: relative;
  border-left: ${({ theme, sizeType }) =>
    sizeType === 'desktop' ? '' : `1px solid ${theme.borderColors.primary}`};
  cursor: pointer;
  right: 3px;
`;

const Sort = styled.div`
  width: 100px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border: ${({ theme, sizeType }) =>
    sizeType === 'desktop'
      ? `1px solid ${theme.borderColors.quaternary}`
      : '0'};
  border-radius: 4px;
  padding: 8px 8px 8px 14px ;
  appearance: none;
`;

const OptionContainer = styled.div`
  position: absolute;
  top: ${({ sizeType }) => (sizeType === 'desktop' ? '48px' : '0')};
  right: ${({ sizeType }) => (sizeType === 'desktop' ? '' : '-2px')};
  width: 100px;
  border-spacing: 0;
  z-index: 1;
`;

const Option = styled.div`
  padding: 8px 40px 9px 18px;
  background: ${({ theme }) => theme.bgColors.primary};
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  color: ${({ color }) => color};

  &:first-child{
    border-radius: 4px 4px 0 0 ;
  }

  &:last-child{
    border-radius: 0 0 4px 4px;
  }

`;
