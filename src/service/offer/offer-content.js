import { data, field } from '@/service/domain.decorator';
import * as pp from './offer.preprocess';

@data
class OfferContent {
  @field('articleId', pp.number)
  id;
  @field('content')
  content;
  @field('redirectURL')
  redirectURL;
  @field('tagList')
  tags;
  @field('isEnd')
  isClosed;
  @field('title')
  title;
  @field('regData', pp.dateTime)
  dateTime;
  @field('readCount', pp.number)
  viewCount;
}

export default OfferContent;
