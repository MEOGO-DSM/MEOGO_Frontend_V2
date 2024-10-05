import React from 'react';
import styled from 'styled-components/native';
import { color } from '../../../styles';
import { QuestionBox } from '../../../components/Review/QuestionBox';
import FilterTag from '../../../components/Review/FilterTag';
import { Pen } from '../../../assets'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function QAndA() {
  const navigation = useNavigation<StackNavigationProp<any>>()

  return (
    <Container>
      <FilterTag />
      <QuestionBox />
      <QuestionBox />
      <WriteButton onPress={() => navigation.navigate('QuestionWrite')}>
        <Pen color='white' />
      </WriteButton>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  background-color: ${color.white};
  padding: 24px 0;
  gap: 16px;
`

const WriteButton = styled.TouchableOpacity`
position: absolute;
bottom: 88px;
right: 20px;
width: 56px;
height: 56px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
background-color: ${color.black};
`
