import React, {useState, useRef} from 'react';
import {
  Dimensions,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import styled from 'styled-components/native';
import {Image} from '../../app/dummy/Image';
import {color} from '@/styles';

export default function ImgSlider() {
  const screenWidth = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / screenWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <Container>
      <ScrollView
        ref={scrollViewRef}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {Image.map((value, index) => (
          <ImgWrap key={index} source={{uri: value}} width={screenWidth} />
        ))}
      </ScrollView>
      <ListWrap>
        {Image.map((_, index) => (
          <List key={index} isActive={index === currentIndex} />
        ))}
      </ListWrap>
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  width: 100%;
  height: 360px;
  flex-direction: row;
`;

const ImgWrap = styled.Image<{width: number}>`
  width: ${({width}) => width}px;
  height: 100%;
`;

const ListWrap = styled.View`
  width: 100%;
  position: absolute;
  flex-direction: row;
  bottom: 0px;
  justify-content: center;
  gap: 8px;
  padding: 12px;
`;

const List = styled.View<{isActive: boolean}>`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: ${({isActive}) =>
    isActive ? color.amber600 : color.gray300};
`;
