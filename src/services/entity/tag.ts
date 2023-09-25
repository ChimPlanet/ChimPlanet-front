import { createEntityFactory } from './base';

export interface TagDAO {
  tagId: string;
  tagName: string;
  parentTagId: string;
  childTagId: string;
}

export interface Tag {
  id: string;
  name: string;
  parent: string;
  child: string;
}

export const parseTagFromResponse = createEntityFactory<TagDAO, Tag>({
  id: 'tagId',
  name: 'tagName',
  parent: 'parentTagId',
  child: 'childTagId',
});
