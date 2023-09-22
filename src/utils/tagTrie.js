import hangul from 'hangul-js';
import trie from 'trie-prefix-tree';

/**
 * Tag Trie Class For Search & Recommendations
 * @author byungjin.dev
 */
class TagTrie {
  /**
   * @param {string[]} tags
   */
  constructor(tags) {
    const disassembled = tags.map(TagTrie.disassembleWord);

    this.tags = tags;
    this.tagMap = TagTrie.makeTagAndDisassembleMap(tags, disassembled);
    this.trie = trie(disassembled);
  }

  //#region methods
  /**
   * @param {string} word
   */
  getSimilarTags(word) {
    return this.trie
      .getPrefix(TagTrie.disassembleWord(word))
      .map((el) => this.tagMap.get(el));
  }

  /**
   * 단어에 해당하는 tag가 있는지 확인합니다.
   * @param {string} word
   * @returns {boolean}
   */
  has(word) {
    return this.tagMap.has(TagTrie.disassembleWord(word));
  }

  /**
   * @param {string} word
   * @returns
   */
  get(word) {
    return this.tagMap.get(TagTrie.disassembleWord(word));
  }

  //#endregion

  //#region static methods
  /**
   * 한글 자모를 분리함.
   * @param {string} word
   * @returns {string}
   */
  static disassembleWord(word) {
    return hangul.disassembleToString(word).toLowerCase();
  }

  /**
   * key: disassembled word, value: original word
   * @param {string[]} tags
   * @param {string[]} disassembled
   * @returns {Map<string, string>}
   */
  static makeTagAndDisassembleMap(tags, disassembled) {
    return new Map(
      disassembled.map((disassembledWord, i) => [disassembledWord, tags[i]]),
    );
  }
  //#endregion
}

export default TagTrie;
