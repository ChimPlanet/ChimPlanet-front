import { PropTypes, styled } from '@chimplanet/ui';

import { Tag } from '@services/entity';
import useSearch from '../../hooks/useSearchNavigate';

interface Props {
  parent: Tag | null;
  afterChoose(): void;
  category: Map<Tag, Tag[]>;
}

const ChildCategoryColumn = ({ parent, afterChoose, category }: Props) => {
  const search = useSearch();

  const items = parent && category.get(parent);

  return (
    <Container>
      <Content>
        {parent && (
          <Item
            key={parent.id}
            onClick={() => {
              search(parent, 'tag');
              afterChoose();
            }}
          >
            {parent.name}
          </Item>
        )}
        {items &&
          items.map((t) => (
            <Item
              key={t.id}
              onClick={() => {
                search(t.name, 'tag');
                afterChoose();
              }}
            >
              {t.name}
            </Item>
          ))}
      </Content>
      <Background />
    </Container>
  );
};

export default ChildCategoryColumn;

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
