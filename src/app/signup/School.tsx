import React from 'react';
import {Input} from '../../components';
import styled from 'styled-components/native';
import {SignupProps} from '../../interfaces';
import {Controller} from 'react-hook-form';

interface SchoolProps extends SignupProps {
  schoolName: string | null;
}

function School({control, errors, schoolName}: SchoolProps) {
  return (
    <Container>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            readonly
            onChangeText={onChange}
            title="학교 이름"
            placeholder="재학 중인 학교 이름을 입력해주세요"
            value={schoolName || ''}
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
