import { useMemo } from 'react';
import { styled, useScreenType } from 'chimplanet-ui';
import Arrow from '../../assets/Arrow.png';

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

  const currentColor = useMemo(() => {
    return sizeType === 'desktop' ? '#101C33' : '#00BD2F';
  }, [sizeType]);

  const currentBorderColor = useMemo(() => {
    return sizeType === 'desktop' ? '' : '1px solid #00BD2F';
  }, [sizeType]);

  return (
    <>
      <Box sizeType={sizeType} />
      <NavContainer sizeType={sizeType}>
        <nav>
          <NavListContainer sizeType={sizeType}>
            <NavList
              onClick={(e)=>directButton(e,'ING')}
              sizeType={sizeType}
              current={
                isEnd.text === '구인중' ? currentBorderColor : '#AAB1BC'
              }
              color={isEnd.text === '구인중' ? currentColor : '#AAB1BC'}
            >
              구인중
            </NavList>
            <NavList
              onClick={(e)=>directButton(e,'END')}
              sizeType={sizeType}
              current={isEnd.text === '모집마감' ? currentBorderColor : ''}
              color={isEnd.text === '모집마감' ? currentColor : '#AAB1BC'}
            >
              모집마감
            </NavList>
            <NavList
              onClick={(e)=>directButton(e,'ALL')}
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
          <SortContainer>
            <Sort onClick={onSelect} sizeType={sizeType}>
              {sortValue.text}
            </Sort>
            {select && (
              <OptionContainer sizeType={sizeType}>
                <Option
                  onClick={(e)=>setValue(e,'regDate')}
                  color={sortValue.text === '최신순' ? '#00BD2F' : '#8E94A0'}
                >
                  최신순
                </Option>
                <Option
                  onClick={(e)=>setValue(e,'readCount')}
                  color={sortValue.text === '조회순' ? '#00BD2F' : '#8E94A0'}
                >
                  조회순
                </Option>
{/*                 <Option
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
  background: #f5f5f5;
`;

const NavContainer = styled.div`
  display: ${({ sizeType }) => (sizeType === 'desktop' ? '' : 'flex')};
  margin-top: ${({ sizeType }) => (sizeType === 'desktop' ? '30px' : '32px')};
  margin-bottom: 22px;
  border-bottom: ${({ sizeType }) =>
    sizeType === 'desktop' ? '' : '1px solid #DBDEE2;'};
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
  //font-size: 24px;
  line-height: 29px;
  color: ${({ color }) => color};
  margin-right: 24px;
  padding-bottom: ${({ sizeType }) => (sizeType === 'desktop' ? '' : '15px')};
  cursor: pointer;
  border-bottom: ${({ current }) => current};
`;

const Border = styled.div`
  /*  height: 2px;
    width: 100%;
    border-bottom: ${({ current }) => current};  */
  //border-radius: 4px 4px 0px 0px;
`;

const Total = styled.div`
  display: ${({ sizeType }) => (sizeType === 'desktop' ? '' : 'none')};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #101c33;
`;

const SortContainer = styled.div`
  position: relative;
  border-left: ${({ sizeType }) =>
    sizeType === 'desktop' ? '' : '1px solid #DBDEE2'};
  cursor: pointer;
  right: 3px;
`;

const Sort = styled.div`
  width: 100px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  border: ${({ sizeType }) =>
    sizeType === 'desktop' ? '1px solid #DBDEE2' : '0'};
  border-radius: 4px;
  padding: 8px 32px 9px 18px;
  appearance: none;
  background: url(${Arrow}) no-repeat right 14px center;
`;

const OptionContainer = styled.div`
  position: absolute;
  top: ${({ sizeType }) => (sizeType === 'desktop' ? '48px' : '0')};
  background: #ffffff;
  box-shadow: ${({ sizeType }) =>
    sizeType === 'desktop' ? '0px 0px 2px rgba(0, 0, 0, 0.25)' : '0'};
  border-radius: 4px;
  width: 100px;
  z-index: 1;
`;

const Option = styled.div`
  height: 36px;
  padding: 8px 40px 9px 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  color: ${({ color }) => color};
`;
