import {useState} from 'react';
import styled from 'styled-components/native';
import {Arrow, Close} from '../../assets';
import {color} from '../../styles';
import {Dimensions} from 'react-native';

interface PropsType {
  photo?: Array<string | number>;
  selected?: string;
}

export default function ExpandImage({photo, selected}: PropsType) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const height = Dimensions.get('window').height;
  const image =
    'https://i.namu.wiki/i/t1UsC9Fl1UtAxwAsgtm2sRk3Ble2d1_PT3jasrYQW5MbxAyIDc2stvUVfnzyyUFEFRqc-Crhz_4lfZ73hrmbKw.webp';

  return (
    <ImageShadow height={height}>
      <Container>
        <CancelWrap>
          <Close color="white" onPress={() => {}} />
        </CancelWrap>
        <Content>
          <LeftArrowWrap>
            <Arrow size={32} color="white" rotate="left" />
          </LeftArrowWrap>
          <Image source={{uri: image}} />
          <RightArrowWrap>
            <Arrow size={32} color="white" rotate="right" />
          </RightArrowWrap>
        </Content>
      </Container>
    </ImageShadow>
  );
}

const ImageShadow = styled.View<{height: number}>`
  position: absolute;
  width: 100%;
  height: ${({height}) => height}px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const Container = styled.View`
  flex: 1;
`;

const CancelWrap = styled.View`
  display: flex;
  align-items: flex-end;
  padding: 20px 16px;
`;

const Content = styled.View`
  padding: 48px 20px;
`;

const LeftArrowWrap = styled.View`
  position: absolute;
  top: 50%;
  left: 0;
  padding: 16px 8px;
  border-radius: 0 8px 8px 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const RightArrowWrap = styled.View`
  position: absolute;
  top: 50%;
  right: 0;
  padding: 16px 8px;
  border-radius: 8px 0 0 8px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const Image = styled.Image`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
