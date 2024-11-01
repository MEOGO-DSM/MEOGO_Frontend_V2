import React, {useState} from 'react';
import {Warn} from '../../assets';
import styled from 'styled-components/native';
import {color, Font} from '@/styles';
import {Button, Input} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import {SignupProps} from '../../interfaces';
import {Controller} from 'react-hook-form';
import {StackNavigationProp} from '@react-navigation/stack';

function Name({control, errors}: SignupProps) {
  const [visibleModal, setVisibleModal] = useState<boolean>();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <Container>
      <Controller
        control={control}
        rules={{
          required: '이름을 입력해주세요.',
          pattern: {
            value: /^[ㄱ-ㅎ|가-힣]/,
            message: '한국어로 입력해주세요.',
          },
        }}
        render={({field: {onChange, value}}) => (
          <Input
            onChangeText={onChange}
            value={value}
            autoFocus
            title="이름"
            placeholder="실명 입력"
            errorMessage={errors.name?.message}
          />
        )}
        name="name"
      />
    </Container>
  );
}

export default Name;

const Container = styled.View`
  flex: 1;
  padding: 0 20px;
`;
