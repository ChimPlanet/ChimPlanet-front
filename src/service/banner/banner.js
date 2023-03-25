import { data, field } from '@/service/domain.decorator';
import * as pp from './banner-preprocess';

@data
class Banner {
  @field('createdDate', pp.dateTime)
  createdDate;
  @field('deviceType')
  deviceType;
  @field('fileId')
  id;
  @field('fileName')
  fileName;
  @field('imageType', pp.main)
  isMain;
  @field('imageUri')
  sourceUrl;
  @field('redirectType')
  redirectType;
  @field('redirectUrl')
  redirectUrl;
  @field('sequence')
  sequence;
  @field('useYn', pp.active)
  yn;
}

export default Banner;
