import { PropTypes, styled, useNavigate } from '@chimplanet/ui';

import { Paths } from '@routes';
import { Tag } from '@services/entity';
import useSearch from '../../hooks/useSearchNavigate';

interface Props {
  current: Tag | null;
  setCurrent: (tag: Tag | null) => void;
  afterChoose(): void;
  items: Tag[];
}

const ParentCategoryColumn = ({ current, setCurrent, afterChoose, items }: Props) => {
  const search = useSearch();
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Item
          onMouseEnter={() => setCurrent(null)}
          onClick={() => {
            navigate(Paths.Job);
            afterChoose();
          }}
        >
          전체
        </Item>
        {items.map((parent) => (
          <Item
            key={parent.id}
            data-selected={parent === current}
            onMouseEnter={() => setCurrent(parent)}
            onClick={() => {
              search(parent.name, 'tag');
              afterChoose();
            }}
          >
            {parent.name.replace('전체', '').trim()}
          </Item>
        ))}
      </Content>
      <Background />
    </Container>
  );
};

export default ParentCategoryColumn;

ParentCategoryColumn.propTypes = {
  current: PropTypes.string,
  setCurrent: PropTypes.func.isRequired,
};

const Container = styled.div`
  width: 220px;
`;

const Content = styled.div`
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.bgColors.secondary};
`;

const Background = styled.div``;

const Item = styled.div`
  padding: 11px 20px;

  &[data-selected='true'],
  &:hover {
    background-color: ${({ theme }) => theme.bgColors.tertiary};
    color: ${({ theme }) => theme.specialColors.positive};
  }
`;
