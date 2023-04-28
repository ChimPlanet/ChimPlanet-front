import { Tag } from '@/service/tag';

/** @param {Tag[]} tags */
export function getFamilyTree(tags) {
  /** @type {Map<Tag, Tag[]>} */
  const familyTree = new Map();

  // to search parent when travel child
  const sourceTree = tags.reduce((acc, tag) => {
    if (tag.childTagId === tag.parentTagId) {
      acc[tag.parentTagId] = tag;
      familyTree.set(tag, new Array());
    }
    return acc;
  }, {});

  tags.forEach((tag) => {
    if (tag.childTagId === tag.parentTagId || !(tag.parentTagId in sourceTree))
      return;

    familyTree.get(sourceTree[tag.parentTagId]).push(tag);
  });

  return familyTree;
}
