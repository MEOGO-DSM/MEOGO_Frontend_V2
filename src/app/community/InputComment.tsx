import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {color} from '../../styles/color';
import {Heart} from '../../assets';

function InputComment() {
  const screenWidth = Dimensions.get('screen').width;
  const [pressed, setPressed] = useState<boolean>(false);
  return (
    <Container width={screenWidth}>
      <Input
        placeholderTextColor={color.gray400}
        placeholder="댓글을 입력해주세요"
      />
      <HeartBox onPress={() => setPressed(!pressed)}>
        <Heart fill={pressed ? `${color.black}` : 'none'} />
      </HeartBox>
    </Container>
  );
}

export default InputComment;

const Container = styled.View<{width: number}>`
  width: ${({width}) => width}px;
  background-color: white;
  border-top-width: 1px;
  border-top-color: ${color.gray400};
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Input = styled.TextInput`
  padding: 16px 8px;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  flex: 1;
`;

const HeartBox = styled.TouchableOpacity`
  padding: 16px 8px;
`;
