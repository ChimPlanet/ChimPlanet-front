import { styled, FloatingMenu } from 'chimplanet-ui';
import { useRef, useState } from 'react';
import { useJobViewContext } from '../JobViewContext';
import { ArrowBelowSmallIcon } from '@/common/icons';

const MenuWidth = 100;

const orderByTypes = Object.freeze([
  { key: 'recent', name: '최신순' },
  { key: 'popular', name: '조회수' },
  { key: 'recommend', name: '추천순' },
]);
//"popular" | "recent" | "recommend"
export default function JobViewHeaderOrderByButton() {
  const [visible, setVisible] = useState(false);
  const anchorRef = useRef();
  const [context, dispatch] = useJobViewContext();

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
        <FloatingMenu anchorRef={anchorRef} close={close}>
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
  border-radius: 4px;
  border: 1px solid #dbdee2;
  padding: 8px 18px;
  cursor: pointer;
`;

const SelectText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.main};
  user-select: none;
`;

const Menu = styled.div`
  background-color: white;
  width: ${MenuWidth}px;
  margin-top: 10px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

const MenuOptions = styled.button`
  width: 100%;
  padding: 8px 18px;
  font-size: 16px;
  text-align: left;
  color: ${({ selected, theme }) => (selected ? theme.colors.logo : '#8e94a0')};
  cursor: pointer;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);

  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
