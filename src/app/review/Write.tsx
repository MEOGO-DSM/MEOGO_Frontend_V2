import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TopBar } from '../../components/TopBar';
import { Close, Media } from '../../assets';
import { Font } from '../../styles/font';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { color } from '../../styles/color';
import AddImgContent from '../../components/Review/AddImgContent';
import { Star } from '../../assets';
import { ImagePickerResponse } from 'react-native-image-picker';
import { RequestStoragePermission } from '../../utils/RequestStoragePermission';
import * as ImagePicker from 'react-native-image-picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../utils/store/modules/imageAddRemove"
import { RootState } from '../../utils/store/store';

export default function Write() {
  const navigation = useNavigation<StackNavigationProp<any>>()
  const dispatch = useDispatch()
  const image = useSelector((state: RootState) => state.imageAddRemove.image)

  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [contentValue, setContentValue] = useState<string>('');
  const [limit, setLimit] = useState<number>(0)

  const handleChangeInput = (text: string) => {
    setContentValue(text);
    setLimit(text.length)
  }

  const [response, setResponse] = useState<ImagePickerResponse | null>(null);
  const [isPickingImage, setPickingImage] = useState<boolean>(false);

  const onSelectImage = async () => {
    // const hasPermission = await RequestStoragePermission()
    const hasPermission = true

    if (!hasPermission) {
      console.log('이미지를 선택하려면 저장 권한이 필요합니다')
      return;
    }
    if (isPickingImage) return;
    setPickingImage(true);

    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 100,
        maxHeight: 100,
      }, (response) => {
        console.log(response)
        setPickingImage(false);

        if (response.didCancel) {
          console.log('이미지 선택을 취소했습니다.')
          return
        }
        else if (response.errorCode) {
          console.log('이미지 에러' + response.errorCode)
          return
        }
        setResponse(response);

        if (response.assets && response.assets.length > 0) {
          const newImage = response.assets[0].uri;

          if (newImage && image.length < 4 && !image.includes(newImage)) {
            dispatch(add(newImage))
            console.log("newImage:", newImage);
            console.log("current images:", image);
          } else {
            console.log('더 이상 이미지를 추가할 수 없거나 이미 존재합니다')
          }

        } else {
          console.log('이미지를 선택하지 않았습니다');
        }
      })
  }

  return (
    <>
      <TopBar
        text="리뷰 작성"
        leftIcon={<Close onPress={() => navigation.navigate('Review')} />}
        rightIcon={
          <TouchableOpacity onPress={() => navigation.navigate('KeywordReview')}>
            <Font
              text="다음"
              kind="semi18"
              color={rating && contentValue ? 'black' : 'gray400'}
            />
          </TouchableOpacity>
        }
      />
      <Container>
        <ScoreWrap>
          {[1, 2, 3, 4, 5].map((index) => (
            <TouchableOpacity
              key={index}
            >
              <Star
                size={42}
                full={(hoverRating >= index) || (!hoverRating && rating >= index)}
                onPress={() => setRating(index)}
                onPressIn={() => setHoverRating(index)}
                onPressOut={() => setHoverRating(0)}
              />
            </TouchableOpacity>
          ))}
        </ScoreWrap>
        <ContentBox>
          <WriteWrap>
            <MainTextWrap
              multiline
              placeholder="본문을 입력하세요"
              placeholderTextColor={color.gray300}
              onChangeText={handleChangeInput}
              value={contentValue}
            >
            </MainTextWrap>
          </WriteWrap>
          <LimitText>
            <Font text={`${limit}/300 자`} kind="medium14" color={`${limit > 300 ? "red" : "gray400"}`} />
          </LimitText>

          <ImgWrap>
            <Font text="이미지" kind="semi20" />
            <UploadWrap contentContainerStyle={{ columnGap: 8 }} horizontal={true} >
              <ImgUploadBox onPress={() => onSelectImage()}>
                <Media color="gray300" />
              </ImgUploadBox>
              {image && <AddImgContent />}
            </UploadWrap>
          </ImgWrap>
        </ContentBox>
      </Container>
    </>
  )
}

const Container = styled.View`
  background-color: ${color.white};
  padding-top: 64px;
  flex: 1;
`;

const ScoreWrap = styled.View`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${color.gray100};
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray100};
`;

const ContentBox = styled.View`
  padding: 16px 20px;
  gap: 24px;
`;

const WriteWrap = styled.View`
  height: 349px;
`;

const MainTextWrap = styled.TextInput`
  font-size: 16px;
  font-weight: 500;
`;

const LimitText = styled.View`
  align-items: flex-end;
`;

const ImgWrap = styled.View`
  padding: 24px 0;
  gap: 16px;
  background-color: white;
`;

const UploadWrap = styled.ScrollView`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const ImgUploadBox = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${color.gray50};
  border: 1px solid ${color.gray200};
  border-radius: 16px;
`;
