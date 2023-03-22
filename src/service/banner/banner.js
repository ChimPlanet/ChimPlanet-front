import {data, field} from "@/service/domain.decorator";

@data
class Banner {

  @field("createdDate")
  createdDate;
  @field("deviceType")
  deviceType;
  @field("fileId")
  id;
  @field("fileName")
  fileName;
  @field("imageType")
  isMain;
  @field("imageUri")
  sourceUrl;
  @field("redirectType")
  redirectType;
  @field("redirectUrl")
  redirectUrl;
  @field("sequence")
  sequence;
  @field("useYn")
  yn

}

export default Banner;
