import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { Logo } from '../../assets';
import { Button, Input } from '../../components';
import { Font, color } from '../../styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginHandler } from '../../apis/user';
import axios from 'axios';
import { instance } from '../../apis/axios';

function Login() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: '',
      password: '',
    },
  });

  // const onLoginPress = async (data: { id: string; password: string }) => {
  //   try {
  //     const response = await loginHandler(data);
  //     console.log('로그인 응답:', response);
  
  //     // 응답 상태와 데이터 체크
  //     if (response.status === 200) {
  //       await AsyncStorage.setItem('accessToken', response.data.data.accessToken);
  //       navigation.navigate('NavBar');
  //     } else {
  //       Alert.alert('아이디 또는 비밀번호를 잘못 입력했습니다.');
  //     }
  //   } catch (error) {
  //     console.error('로그인 오류:', error);
  //     Alert.alert('로그인 중 오류가 발생했습니다.');
  //   }
  // };

  const deviceToken = "dJ48Spz9okiRjoDS6eOXfr:APA91bECH6FfjznuD_jtGM06oCKjLQ3oyNRbnQRfE7ahYEhwBXKs2uy1R430A7Kk2dXd8dhdJ_b8n5DBYuA2vkqCHAHkkOEVp3XKZfC954-b15Tk6YNhLETi0UB-ZGrzDljTSyjBOh4u"

  const loginHandler = async (data: { id: any; password: any; }) => {
    return await instance.post(`user/signin`, {
      account_id: data.id, 
      password: data.password,
      device_token: deviceToken
    })
    .then(response => {
      AsyncStorage.setItem('accessToken', response.data.accessToken);
      navigation.navigate("NavBar")
      return response
    })
    .catch(err => {
      console.log(err);
    });
  };
  
  
  
  

  return (
    <Container>
      <Logo size={64} />
      <LoginBox>
        <InputBox>
          <Controller
            control={control}
            name="id"
            rules={{ required: '아이디를 입력해주세요.' }}
            render={({ field: { onChange, value } }) => (
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
            rules={{ required: '비밀번호를 입력해주세요.' }}
            render={({ field: { onChange, value } }) => (
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
          <Button onPress={handleSubmit(loginHandler)} text="로그인" />
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
