import { data, field } from 'useful-decorator';
import * as pp from '../entity/preprocess';

@data
class OfferContent {
  @field('articleId', pp.number)
  id;
  @field('content')
  content;
  @field('redirectURL')
  redirectURL;
  @field('tags')
  tags;
  @field('profileImageUrl', pp.profileImageUrl)
  profileImageUrl;
  @field('isEnd')
  isClosed;
  @field('boardTitle')
  title;
  @field('writer')
  writer;
  @field('regDate', pp.dateTime)
  dateTime;
  @field('readCount', pp.number)
  viewCount;
}

export default OfferContent;
