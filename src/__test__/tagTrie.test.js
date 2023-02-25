import TagTrie from '@/utils/tagTrie';
import tags from '@/__mocks__/mock_tags';

const tagTrie = TagTrie.getInstance(tags);

describe('태그 검색 트리 동작', () => {
  test('should be able to add a tag', () => {
    const tag = tagTrie.getSimilarTags('테스');

    expect(tag.includes('테스터')).toBe(true);
  });
});
