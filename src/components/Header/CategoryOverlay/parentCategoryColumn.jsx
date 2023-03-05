import styled from 'styled-components';
import PropTypes from 'prop-types';
import useSearch from '../../../hooks/useSearch';

const Container = styled.div`
  width: 220px;
`;

const Content = styled.div`
  background-color: #fff;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
`;

const Background = styled.div``;

const Item = styled.div`
  padding: 11px 20px;

  &[data-selected='true'],
  &:hover {
    background: #f5f6f7;
    color: #00bd2f;
  }
`;

const PARENTS = [
  '전체',
  'IT · 게임',
  '디자인 · 2D',
  '3D · 건축 · 인테리어',
  '미디어 · 연예 · 창작',
  '일러스트',
  '기타',
];

/**
 * @param {{current: string, setCurrent(value: string):void, afterChoose():void }}
 * @returns
 */
export default function ParentCategoryColumn({
  current,
  setCurrent,
  afterChoose,
}) {
  const search = useSearch();

  return (
    <Container>
      <Content>
        {PARENTS.map((parent) => (
          <Item
            key={parent}
            data-selected={parent === current}
            onMouseEnter={() => setCurrent(parent)}
            onClick={() => {
              search(parent);
              afterChoose();
            }}
          >
            {parent}
          </Item>
        ))}
      </Content>
      <Background />
    </Container>
  );
}

ParentCategoryColumn.propTypes = {
  current: PropTypes.string,
  setCurrent: PropTypes.func.isRequired,
};
