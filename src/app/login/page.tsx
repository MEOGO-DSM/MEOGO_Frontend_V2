import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Logo} from '../../assets';
import {Button, Input} from '../../components';
import {Font, color} from '../../styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {Controller, useForm} from 'react-hook-form';
import {Alert} from 'react-native';

const navigation = useNavigation<StackNavigationProp<any>>();
const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const onLoginPress = (data: {id: string; password: string}) => {
    if (data.id === 'hamster' && data.password === 'hamster@123') {
      navigation.navigate('NavBar');
    } else {
      Alert.alert('아이디 또는 비밀번호를 잘못 입력했습니다.');
    }
  };

  return (
    <Container>
      <Logo size={64} />
      <LoginBox>
        <InputBox>
          <Controller
            control={control}
            name="id"
            rules={{required: '아이디를 입력해주세요.'}}
            render={({field: {onChange, value}}) => (
              <Input
                onChangeText={onChange}
                value={value}
                noError={!errors.id}
                errorMessage={errors.id ? errors.id.message : ''}
                placeholder="아이디"
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{required: '비밀번호를 입력해주세요.'}}
            render={({field: {onChange, value}}) => (
              <Input
                onChangeText={onChange}
                value={value}
                noError={!errors.password}
                errorMessage={errors.password ? errors.password.message : ''}
                placeholder="비밀번호"
                password
              />
            )}
          />
        </InputBox>
        <ButtonBox>
          <Button onPress={handleSubmit(onLoginPress)} text="로그인" />
          <GotoSignupBox>
            <Font kind="medium14" text="계정이 없으신가요?" color="gray500" />
            <MoveSignup onPress={() => navigation.navigate('Signup')}>
              <GotoSignup>회원가입</GotoSignup>
            </MoveSignup>
          </GotoSignupBox>
        </ButtonBox>
      </LoginBox>
    </Container>
  );
}

export default Login;

const Container = styled.View`
  flex: 1;
  gap: 48px;
  padding: 60px 20px;
  align-items: center;
  background-color: ${color.white};
`;

const LoginBox = styled.View`
  width: 100%;
  gap: 40px;
`;

const InputBox = styled.View`
  width: 100%;
  gap: 16px;
`;

const ButtonBox = styled.View`
  gap: 24px;
`;

const GotoSignupBox = styled.View`
  flex-direction: row;
  gap: 8px;
  padding-left: 4px;
`;

const GotoSignup = styled.Text`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  text-decoration: underline;
  color: black;
`;

const MoveSignup = styled.TouchableOpacity``;
