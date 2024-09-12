import React from 'react';
import {Controller, useWatch} from 'react-hook-form';
import {styled} from 'styled-components/native';
import {SignupProps} from '../../interfaces';
import {Input} from '../../components';

function IdAndPassword({control, errors}: SignupProps) {
  const password = useWatch({
    control,
    name: 'password',
  });

  return (
    <InputBox>
      <Controller
        control={control}
        rules={{
          required: '아이디를 입력해주세요.',
          pattern: {
            value: /^[a-zA-Z0-9]*$/,
            message: '영어와 숫자만 사용 가능합니다.',
          },
          minLength: {value: 4, message: '아이디는 최소 4자여야 합니다.'},
          maxLength: {
            value: 20,
            message: '아이디는 최대 20자까지 입력 가능합니다.',
          },
        }}
        render={({field: {onChange, value}}) => (
          <Input
            value={value}
            onChangeText={onChange}
            title="아이디"
            placeholder="최소 4자, 최대 20자"
            errorMessage={errors.id?.message}
          />
        )}
        name="id"
      />

      <Controller
        control={control}
        rules={{
          required: '비밀번호를 입력해주세요.',
          pattern: {
            value: /^(?=.*[!@#$%^&*])/,
            message: '특수문자 1자 이상 포함해야 합니다.',
          },
          minLength: {
            value: 12,
            message: '비밀번호는 최소 12자여야 합니다.',
          },
          maxLength: {
            value: 20,
            message: '비밀번호는 최대 20자까지 가능합니다.',
          },
        }}
        render={({field: {onChange, value}}) => (
          <Input
            value={value}
            onChangeText={onChange}
            password
            title="비밀번호"
            placeholder="특수문자 1자 이상, 최대 20자"
            errorMessage={errors.password?.message}
          />
        )}
        name="password"
      />

      <Controller
        control={control}
        rules={{
          required: '비밀번호를 확인해주세요.',
          validate: value =>
            value === password || '비밀번호가 일치하지 않습니다.',
        }}
        render={({field: {onChange, value}}) => (
          <Input
            value={value}
            onChangeText={onChange}
            password
            title="비밀번호 확인"
            placeholder="비밀번호 확인"
            errorMessage={errors.passwordCheck?.message}
          />
        )}
        name="passwordCheck"
      />
    </InputBox>
  );
}

export default IdAndPassword;

const InputBox = styled.View`
  gap: 12px;
  width: 100%;
  padding: 0 20px;
`;
