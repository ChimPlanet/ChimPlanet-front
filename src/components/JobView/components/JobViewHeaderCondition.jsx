import { styled } from 'chimplanet-ui';
import { useJobViewContext } from '../JobViewContext';

export default function JobViewHeaderCondition({ reverse }) {
  const [context, dispatch] = useJobViewContext();

  const handleClick = (condition) => dispatch({ condition });

  return (
    <Container>
      {(reverse ? reversedConditionTypes : conditionTypes).map(
        ({ key, name }) => (
          <Items
            key={key}
            data-selected={`${key === context.condition}`}
            onClick={handleClick.bind(null, key)}
          >
            {name}
          </Items>
        ),
      )}
    </Container>
  );
}

const conditionTypes = Object.freeze([
  { key: 'ongoing', name: '구인중' },
  { key: 'end', name: '모집마감' },
  { key: 'all', name: '전체' },
]);

const reversedConditionTypes = Object.freeze([...conditionTypes].reverse());

const Container = styled.div``;

const Items = styled.button`
  display: inline-block;
  margin: auto 0px;
  height: 100%;

  cursor: pointer;

  margin-right: 16px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColors.senary};
  /* padding: 10px 0px; */
  padding-top: 8px;
  padding-bottom: 12px;

  &[data-selected='true'] {
    color: ${({ theme }) => theme.specialColors.positive};
    border-bottom: 1px solid ${({ theme }) => theme.specialColors.positive};
  }

  ${({ theme }) => theme.media.desktop`
      margin-right: 24px;
      font-size: 24px;
      font-weight: 700;
   
     
      ${`
        &[data-selected='true'] {
          color: ${theme.textColors.primary};
          border-bottom: none;
        }
      `};
  `}
`;
