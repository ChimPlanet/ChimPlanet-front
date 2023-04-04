import { Container } from 'postcss';
import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';

function ImagePreview({ image }) {
    return (
      <ImageContainer draggable>
        <Image src={image} alt="preview" />
      </ImageContainer>
    );
}

export default function ImageUploadBox() {

  const [uploadedImages, setUploadedImages] = useState('');
  const uploadBoxRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const uploadBox = uploadBoxRef.current;
    const input = inputRef.current;
    
    const handleFiles = (files) => {
      for (const file of files) {
        if (!file.type.startsWith("image/")) continue;
        const reader = new FileReader();
        reader.onloadend = (e) => {
          const result = e.target.result;
          if (result) {
            setUploadedImages(result);
          }
        };
        reader.readAsDataURL(file);
      }
    };
    
    const changeHandler = (event) => {
      const files = event.target.files;
      handleFiles(files);
    };
    
    const dropHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const files = event.dataTransfer.files;
      handleFiles(files);
    };
    
    const dragOverHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    
    uploadBox.addEventListener("drop", dropHandler);
    uploadBox.addEventListener("dragover", dragOverHandler);
    input.addEventListener("change", changeHandler);
    
    return () => {
      uploadBox.removeEventListener("drop", dropHandler);
      uploadBox.removeEventListener("dragover", dragOverHandler);
      input.removeEventListener("change", changeHandler);
    };
  }, []);
    
  return (
    <InputContainer ref={uploadBoxRef}>
          이곳에 파일을 드롭하여 <br />
          업로드 해주세요
      <ThumbnailInput type="file" accept="image/*" ref={inputRef} />
      <div>
        {uploadedImages.length !== 0 ? 
        <ImagePreview image={uploadedImages} /> : <></>} 
      </div>
    </InputContainer>
  );
}

const InputContainer = styled.div`
    display: flex;
    margin: 9px 0 0;
    width: 200px;
    height: 200px;
    align-items: center;
    text-align: center;
    justify-content: center;
    border: 1px solid #DBDEE2;
`;

const ThumbnailInput = styled.input`
    visibility: hidden;
    display: none; 
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: -145px;
  display: block;
  width: 180px;
  height: 180px;
  border-radius: 8px;
  margin: 0px auto;
  transform: translateZ(0);
  backface-visibility: hidden;
`;