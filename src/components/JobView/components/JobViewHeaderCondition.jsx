import { useJobViewContext } from '../JobViewContext';
import styled from 'styled-components';

export default function JobViewHeaderCondition() {
  const [context, dispatch] = useJobViewContext();

  const handleClick = (condition) => dispatch({ condition });

  return (
    <Container>
      {conditionTypes.map(({ key, name }) => (
        <Items
          key={key}
          selected={key === context.condition}
          onClick={handleClick.bind(null, key)}
        >
          {name}
        </Items>
      ))}
    </Container>
  );
}

const conditionTypes = Object.freeze([
  { key: 'ongoing', name: '구인중' },
  { key: 'end', name: '모집마감' },
  { key: 'all', name: '전체' },
]);

const Container = styled.div``;

const Items = styled.button`
  cursor: pointer;
  margin-right: 24px;
  font-size: 24px;
  font-weight: 700;
  color: #aab1bc;
  color: ${({ selected, theme }) => (selected ? theme.colors.main : '')};
`;
