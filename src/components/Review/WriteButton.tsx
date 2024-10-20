import React from 'react';
import styled from 'styled-components/native';
import {Font} from '../../styles/font';
import {color} from '../../styles/color';
import {Pen} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export default function WriteButton() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <Container
      onPress={() => {
        navigation.navigate('ReviewWrite');
      }}>
      <Pen size={20} color="white" />
      <Font text="리뷰작성" kind="medium14" color="white" />
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  background-color: ${color.black};
  padding: 8px 16px;
  gap: 6px;
  flex-direction: row;
  border-radius: 20px;
  align-items: center;
`;
