import styled from 'styled-components';
import PropTypes from 'prop-types';

import useSearch from '../../hooks/useSearchNavigate';

/**
 * @param {{parent: string, afterChoose():void}} param0
 * @returns
 */
export default function ChildCategoryColumn({ parent, afterChoose }) {
  const search = useSearch();

  return (
    <Container>
      <Content>
        {parent &&
          Array.isArray(childMap[parent]) &&
          childMap[parent].map((el) => (
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
  background-color: #f5f6f7;
  background-color: ${({ theme }) => theme.backgroundColor.sub};
`;

const Background = styled.div``;

const Item = styled.div`
  padding: 11px 20px;

  &:hover {
    color: #00bd2f;
  }
`;

const childMap = {
  'IT · 게임': [
    'IT · 게임 전체',
    '프론트엔드',
    '백엔드',
    '커맨드',
    '리소스팩',
    'QA',
    'GM',
    '유니티 개발자',
  ],
  '디자인 · 2D': [
    '디자인 · 2D 전체',
    '그래픽 디자이너',
    'UX/UI 디자이너',
    '출판, 편집 디자이너',
    'BX/BI 디자이너',
    '2D 디자이너',
    '캐릭터 디자이너',
    '도트 · 픽셀 디자이너',
    '배경 디자이너',
    '맵 디자이너',
    '레벨 디자이너',
    '의상 디자이너',
  ],
  '3D · 건축 · 인테리어': [
    '3D · 건축 · 인테리어 전체',
    '3D 모델링',
    '3D 블렌더',
    '3D 애니메이터',
    '아바타 제작자',
    '맵 제작자',
    '소품 모델링',
    '시네머신',
    '리거',
    'MMD',
    '트리거 제작자',
    '모션캡쳐/모션클리너',
    '건축가',
  ],
  '미디어 · 연예 · 창작': [
    '미디어 · 연예 · 창작 전체',
    '편집자',
    '비디오 디렉터',
    '카메라',
    'VFX/SFX',
    '작곡가',
    '사운드 엔지니어',
    '편곡',
    '마스터링 엔지니어',
    '보컬로이드 조교',
    '작사가',
    '작가',
    '기자',
    '성우',
    '배우',
    '감독',
  ],
  일러스트: [
    '일러스트 전체',
    '일러스트레이션',
    '만화가',
    '웹툰작가',
    '선화가',
    '라이브 2D',
    '2D 원화가',
    '그림작가',
    '애니메이터',
  ],
  기타: ['기타 전체', '테스터'],
};
