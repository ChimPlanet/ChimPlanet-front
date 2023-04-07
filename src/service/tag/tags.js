import { data, field } from 'useful-decorator';
import * as pp from './tag.preprocess';

@data
class Tag {
  @field('childTagId')
  childTagId;
  @field('parentTagId')
  parentTagId;
  @field('tagId')
  tagId;
  @field('tagName')
  tagName;
}

export default Tag;
