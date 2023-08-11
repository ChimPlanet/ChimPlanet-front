import { PropTypes, styled } from '@chimplanet/ui';

import useSearch from '../../hooks/useSearchNavigate';

/**
 * @param {{parent: string, afterChoose():void}}
 * @returns
 */
export default function ChildCategoryColumn({ parent, afterChoose, itemMap }) {
  const search = useSearch();

  return (
    <Container>
      <Content>
        {parent && (
          <Item
            key={parent}
            onClick={() => {
              search(parent, 'tag');
              afterChoose();
            }}
          >
            {parent}
          </Item>
        )}
        {parent &&
          Array.isArray(itemMap[parent]) &&
          itemMap[parent].map((el) => (
            <Item
              key={el}
              onClick={() => {
                search(el, 'tag');
                afterChoose();
              }}
            >
              {el}
            </Item>
          ))}
      </Content>
      <Background />
    </Container>
  );
}

ChildCategoryColumn.propTypes = {
  parent: PropTypes.string,
};

const Container = styled.div`
  width: 220px;
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.bgColors.tertiary};
`;

const Background = styled.div``;

const Item = styled.div`
  padding: 11px 20px;

  &:hover {
    color: ${({ theme }) => theme.specialColors.positive};
  }
`;
