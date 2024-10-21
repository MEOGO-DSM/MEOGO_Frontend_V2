import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Close} from '../../assets';
import {color} from '@/styles';

interface PropsType {
  photo?: Array<string | undefined>;
  onPhotosChange: (photos: Array<string | undefined>) => void;
}

export default function AddImgContent({photo = [], onPhotosChange}: PropsType) {
  const [photos, setPhotos] = useState<Array<string | undefined>>(photo);

  const deletePhoto = (index: number) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
    onPhotosChange(updatedPhotos);
  };

  return (
    <>
      {photo?.map((photo, index) => (
        <Container key={index}>
          <ImgContent source={{uri: photo}} />
          <CancelButton onPress={() => deletePhoto(index)}>
            <Close size={16} />
          </CancelButton>
        </Container>
      ))}
    </>
  );
}

const Container = styled.View`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: pink;
  border: 1px solid ${color.gray100};
  border-radius: 16px;
  overflow: hidden;
`;

const ImgContent = styled.Image`
  width: 100%;
  height: 100%;
`;

const CancelButton = styled.TouchableOpacity`
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 4px;
  background-color: #f4f4f5;
  opacity: 0.2;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;
