import { Tag } from '@services/tag';

export function groupBy(collection, attributeName) {
  if (!Array.isArray(collection)) {
    throw new TypeError('Collection must be an array');
  }

  const group = collection.reduce((acc, cur) => {
    const key = cur[attributeName];
    if (!(key in acc)) {
      acc[key] = [];
    }
    acc[key].push(cur);
    return acc;
  }, {});

  return group;
}

/**
 * @template T
 * @param {Array<T>} array
 * @param {(element: T) => string} sourceGetter
 */
export function prefetchImages(array, sourceGetter) {
  array.forEach((elem) => {
    new Image().src = sourceGetter(elem);
  });
}

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

/**
 * @param {URLSearchParams} params
 */
export function getSearchMetadata(params) {
  return {
    type: params.get('type') || 'normal', // 타입이 만약 없는 경우 일반 검색으로 간주함.
    words: params.get('q')?.split(',') || [], // 검색 쿼리 배열
  };
}
