import hangul from 'hangul-js';
import trie from 'trie-prefix-tree';

/** 한글 자모를 분리함. */
export const disassemble = (word: string) => hangul.disassembleToString(word).toLowerCase();

const makeDisassembledReverseMap = (origin: string[], disassembled: string[]) =>
  new Map(disassembled.map((w, i) => [w, origin[i]]));

/**
 * Tag Trie Class For Search & Recommendations
 * @author byungjin.dev
 */
class TagTrie {
  tags: string[];
  disassembleToOrigin: Map<string, string>;
  trie: ReturnType<typeof trie>;

  constructor(tags: string[]) {
    const disassembled = tags.map(disassemble);

    this.tags = tags;
    this.disassembleToOrigin = makeDisassembledReverseMap(tags, disassembled);
    this.trie = trie(disassembled);
  }

  //#region methods
  /**
   * @param {string} word
   */
  similar(word: string) {
    return this.trie.getPrefix(disassemble(word)).map((e) => this.disassembleToOrigin.get(e));
  }

  /**
   * 단어에 해당하는 tag가 있는지 확인합니다.
   * @param {string} word
   * @returns {boolean}
   */
  has(word: string) {
    return this.disassembleToOrigin.has(disassemble(word));
  }

  /**
   * @param {string} word
   * @returns
   */
  get(word: string) {
    return this.disassembleToOrigin.get(disassemble(word));
  }

  //#endregion
}

export default TagTrie;
