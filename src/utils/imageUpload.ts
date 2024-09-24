import React, { useState } from "react";
import * as ImagePicker from 'react-native-image-picker';
import { ImagePickerResponse } from 'react-native-image-picker';
import { useSelector, useDispatch } from "react-redux";
import { add } from "./store/modules/imageAddRemove";
import { RootState } from "./store/store";

const useImagePicker = () => {
  const dispatch = useDispatch();
  const image = useSelector((state: RootState) => state.imageAddRemove.image);
  const [response, setResponse] = useState<ImagePickerResponse | null>(null);
  const [isPickingImage, setPickingImage] = useState<boolean>(false);

  const onSelectImage = async () => {
    // const hasPermission = await RequestStoragePermission();
    const hasPermission = true;

    if (!hasPermission) {
      console.log('이미지를 선택하려면 저장 권한이 필요합니다');
      return;
    }

    if (isPickingImage) return;
    setPickingImage(true);

    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 100,
        maxHeight: 100,
      },
      (response) => {
        setPickingImage(false);
        
        if (response.didCancel) {
          console.log('이미지 선택을 취소했습니다.');
          return;
        }

        if (response.errorCode) {
          console.log('이미지 에러: ' + response.errorCode);
          return;
        }

        setResponse(response);

        if (response.assets && response.assets.length > 0) {
          const newImage = response.assets[0].uri;

          if (newImage && image.length < 4) {
            dispatch(add(newImage));
          } else {
            console.log('더 이상 이미지를 추가할 수 없거나 이미 존재합니다');
          }
        } else {
          console.log('이미지를 선택하지 않았습니다');
        }
      }
    );
  };

  return { onSelectImage, response };
};

export default useImagePicker;
