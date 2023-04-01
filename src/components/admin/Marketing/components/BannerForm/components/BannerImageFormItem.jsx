import React, { useState } from 'react';

import DragAndDropImage from '@/common/components/DragAndDropImage';

import {
  Container,
  Description,
  ImageWrap,
  PlaceHolderItem,
  PlaceHolderContainer,
  DraggingPane,
  UnDraggingPane,
} from './BannerImageFormItem.style';
import { encodeFileToBase64, imageRect, validateFile } from '../utils';

/**
 * @typedef {object} BannerImageFormItemProps
 * @property {string} title
 * @property {"PC" | "MOBILE"} type
 * @property {string?} imageSourceUrl
 * @property {(file: File)=>void} setImageFile
 *
 * @param {BannerImageFormItemProps}
 * @returns
 */
export default function BannerImageFormItem({
  title,
  type,
  imageSourceUrl,
  setImageFile,
}) {
  const [imageObjectUrl, setImageObjectUrl] = useState(null);

  /** @param {File} imageFile */
  function handleDropImage(imageFile) {
    setImageFile(imageFile);
    encodeFileToBase64(imageFile).then(setImageObjectUrl);
  }

  return (
    <Container>
      <Description>{title}</Description>
      <ImageWrap>
        <DragAndDropImage
          id={type}
          imageRect={imageRect}
          imageSourceURL={imageObjectUrl || imageSourceUrl}
          validateDroppedFile={validateFile}
          onDropImage={handleDropImage}
          elementWhenEmpty={<PlaceHolderImage />}
          elementWhenDragging={<DraggingPane />}
          elementWhenUsually={<UnDraggingPane />}
        />
      </ImageWrap>
    </Container>
  );
}

function PlaceHolderImage() {
  return (
    <PlaceHolderContainer>
      <PlaceHolderItem>이곳에 파일을 드롭하여</PlaceHolderItem>
      <PlaceHolderItem>업로드 해주세요.</PlaceHolderItem>
    </PlaceHolderContainer>
  );
}
