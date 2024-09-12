import React from 'react';
import {Input} from '../../components';
import {Search} from '../../assets';
import styled from 'styled-components/native';
import {color} from '../../styles';
import {SignupProps} from '../../interfaces';
import {Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface SchoolProps extends SignupProps {
  schoolName: string | null;
}

function School({control, errors, schoolName}: SchoolProps) {

function School({route}: any) {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <Container>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            onChangeText={onChange}
            title="학교 이름"
            placeholder="재학 중인 학교 이름을 입력해주세요"
            value={schoolName || ''}
            icon={<Search color={`${color.gray400}`} />}
          />
        )}
        name="school"
      />
    </Container>
  );
}

export default School;

const Container = styled.View`
  padding: 0 20px;
`;
