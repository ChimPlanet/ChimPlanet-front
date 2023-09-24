import { createEntityFactory } from './base';

interface TagDAO {
  tagId: string;
  tagName: string;
  parentTagId: string;
  childTagId: string;
}

interface Tag {
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
