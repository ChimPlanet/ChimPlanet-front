import { FloatingMenu, styled } from '@chimplanet/ui';
import { ArrowBelowSmallIcon } from '@common/icons';
import { useRef, useState } from 'react';
import { useJobTableContext } from '../contexts/table';

const MenuWidth = 100;

const orderByTypes = Object.freeze([
  { key: 'recent', name: '최신순' },
  { key: 'popular', name: '조회수' },
  { key: 'recommend', name: '추천순' },
]);
//"popular" | "recent" | "recommend"
export default function JobTableHeaderOrderByButton() {
  const [visible, setVisible] = useState(false);
  const anchorRef = useRef();
  const [context, dispatch] = useJobTableContext();

  const handleSelectClick = () => setVisible((prev) => !prev);
  const close = () => setVisible(false);
  const handleOptionClick = (orderBy) => {
    dispatch({ orderBy });
    close();
  };

  return (
    <Container>
      <Select onClick={handleSelectClick} ref={anchorRef}>
        <SelectText>
          {orderByTypes.find((e) => e.key === context.orderBy).name} &nbsp;
          <ArrowBelowSmallIcon />
        </SelectText>
      </Select>
      {visible && (
        <FloatingMenu anchorRef={anchorRef} zIndex={1} close={close}>
          <Menu>
            {orderByTypes.map(({ key, name }) => (
              <MenuOptions
                key={key}
                selected={key === context.orderBy}
                onClick={handleOptionClick.bind(null, key)}
              >
                {name}
              </MenuOptions>
            ))}
          </Menu>
        </FloatingMenu>
      )}
    </Container>
  );
}

const Container = styled.div``;

const Select = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${MenuWidth}px;
  border-left: ${({ theme }) => ` 1px solid ${theme.borderColors.quaternary}`};
  ${({ theme }) => theme.media.desktop`
    ${`border: 1px solid ${theme.borderColors.quaternary}`};
    border-radius: 4px;
  `};
  padding: 8px 18px;
  cursor: pointer;
`;

const SelectText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.textColors.primary};
  user-select: none;
  ${({ theme }) => theme.media.desktop`
    font-weight: 500;
  `}
`;

const Menu = styled.div`
  background-color: white;
  background-color: ${({ theme }) => theme.bgColors.primary};
  /* border: ${({ theme }) => `1px solid ${theme.borderColors.quaternary}`}; */

  width: ${MenuWidth}px;
  margin-top: 10px;
  border-radius: 4px;
`;

const MenuOptions = styled.button`
  width: 100%;
  padding: 8px 16px;
  font-size: 16px;
  text-align: left;
  color: ${({ selected, theme }) =>
    selected ? theme.specialColors.positive : '#8e94a0'};
  cursor: pointer;
  border: ${({ theme }) => `1px solid ${theme.borderColors.quaternary}`};

  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: none;
  }
  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: none;
  }
`;
