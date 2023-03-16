import { data, field } from '@/service/domain.decorator';
import * as pp from './offer.preprocess';

@data
class Offer {
  @field('articleId', pp.number)
  id;
  @field('writer')
  writer;
  @field('boardTitle', pp.title)
  title;
  @field('likeCount', pp.number)
  likeCount;
  @field('readCount', pp.number)
  viewCount;
  @field('regDate', pp.date)
  regDate;
  @field('regDate', pp.dateTime)
  regDateTime;
  @field('regDate')
  rawDateTime;
  @field('redirectURL')
  redirectURL;
  @field('thumbnailURL', pp.thumbnailURL)
  thumbnailURL;
  @field('isEnd', pp.isClosed)
  isClosed;
  @field('boardTitle', pp.isRegular)
  isRegular;
  @field('thumbnailURL', pp.isThumbnail)
  isThumbnail;
  @field('boardtags')
  tags;
}

export default Offer;
