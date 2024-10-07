import styled from "styled-components/native";
import { Arrow, Close } from "../../assets"
import { color } from "../../styles";
import { Dimensions } from "react-native"
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store/store";
import { useDispatch } from "react-redux";
import { isShow, nextImage, prevImage  } from "../../utils/store/modules/appearPhoto"

export default function ExpandImage() {

  const dispatch = useDispatch()
  const showImage = useSelector((state: RootState) => state.appearImage.currentShowImage)
  const isShowImage = useSelector((state: RootState) => state.appearImage.isAppearImage)

  const height = Dimensions.get('window').height;

  return (
    <>
      {
        isShowImage &&
        <ImageShadow height={height} onPress={() => dispatch(isShow(false))}>
          <CancelWrap>
            <Close color={color.white} onPress={() => dispatch(isShow(false))} />
          </CancelWrap>

          <Content>
            <LeftArrowWrap onPress={() =>  dispatch(prevImage())}>
              <Arrow size={32} color={color.white} rotate='left' />
            </LeftArrowWrap>

            <Image source={{ uri: showImage }} />

            <RightArrowWrap onPress={() => dispatch(nextImage())}>
              <Arrow size={32} color={color.white} rotate='right' />
            </RightArrowWrap>
          </Content>
        </ImageShadow>
      }
    </>
  )
}

const ImageShadow = styled.TouchableOpacity<{ height: number }>`
position: absolute;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.2);
z-index: 10000;
`

const CancelWrap = styled.View`
display: flex;
align-items: flex-end;
padding: 20px 16px;
`

const Content = styled.View`
height: 85%;
display: flex;
justify-content: center;
align-items: center;
padding: 48px 20px;
`

const LeftArrowWrap = styled.TouchableOpacity`
position: absolute;
top: 50%;
left: 0;
padding: 16px 8px;
border-radius: 0 8px 8px 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 10;
`

const RightArrowWrap = styled.TouchableOpacity`
position: absolute;
top: 50%;
right: 0;
padding: 16px 8px;
border-radius: 8px 0 0 8px;
background-color: rgba(0, 0, 0, 0.2);
z-index: 10;
`

const Image = styled.Image`
width: 100%;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
`