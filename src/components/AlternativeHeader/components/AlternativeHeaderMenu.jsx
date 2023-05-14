import { Centering } from '@/common/components/Centering';
import Tag from '@/components/Tag';
import { SearchTagSequenceColor } from '@/constants/color';
import { SEARCH_PATH } from '@/constants/route';
import { getSearchMetadata } from '@/utils';
import { styled, useLocation, useNavigate, useScreenType } from 'chimplanet-ui';
import { X } from 'chimplanet-ui/icons';
import { useMemo, useState } from 'react';

export const AlternativeHeaderMenu = () => {
  const location = useLocation();
  const screenType = useScreenType();

  const metadata = useMemo(() => {
    const params = new URLSearchParams(decodeURIComponent(location.search));
    return getSearchMetadata(params);
  }, [location.search]);

  return (
    <Centering>
      {metadata.type === 'normal' ? (
        <NormalQuery text={metadata.words[0]} />
      ) : (
        <TagQuery words={metadata.words} screenType={screenType} />
      )}
    </Centering>
  );
};

export default AlternativeHeaderMenu;

const NormalQuery = ({ text }) => {
  const [query, setQuery] = useState(text);

  const navigate = useNavigate();

  function handleChange({ target }) {
    if (target) {
      setQuery(target.value);
    }
  }

  function handleDelete() {
    setQuery('');
  }

  /** @param {import('react').KeyboardEvent} e*/
  function handleEnter(e) {
    if (e.code !== 'Enter') {
      return;
    }
    if (query.length >= 2) {
      navigate(`${SEARCH_PATH}?type=normal&q=${encodeURIComponent(query)}`);
    } else {
      alert('두 글자 이상을 입력해주세요.');
    }
  }

  return (
    <NormalContainer>
      <Input value={query} onChange={handleChange} onKeyDown={handleEnter} />
      <DelButton onClick={handleDelete}>
        <X size={15} />
      </DelButton>
    </NormalContainer>
  );
};

/** @param {{words: string[]}} */
const TagQuery = ({ words, screenType }) => {
  const navigate = useNavigate();

  const removeTagQuery = (tag) => {
    let query = words
      .filter((e) => e !== tag)
      .map((el) => el.trim())
      .join(',');

    if (query.length > 1) {
      navigate(`/search?type=tag&q=${encodeURIComponent(query)}`);
    } else {
      alert('하나 이상의 태그가 존재해야합니다.');
    }
  };

  return (
    <TagContainer>
      {words.map((tag, i) => (
        <Tag
          key={tag}
          name={tag}
          color="black"
          borderColor="transparent"
          fontSize={screenType === 'mobile' ? '12px' : '16px'}
          padding="7px 10px"
          weight={400}
          backgroundColor={SearchTagSequenceColor[i]}
          removeSelf={() => removeTagQuery(tag)}
        />
      ))}
    </TagContainer>
  );
};

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  padding: 0px 0px 20px 10px;
`;

const NormalContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.current === 'light' ? '#F5f5f5' : '#28292B',
  color: theme.textColors.primary,
  borderRadius: '4px',
  padding: '12px 16px',
  margin: '0px 20px 20px 20px',
  fontSize: '16px',
  fontWeight: 500,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const DelButton = styled.button(({ theme }) => ({
  backgroundColor: theme.current === 'light' ? '#fff' : 'transparent',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  '& svg': {
    display: 'block',
    height: '100%',
    margin: 'auto',
    marginLeft: -3,
  },
}));

const Input = styled.input`
  width: 100%;
`;
