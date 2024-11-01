import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Logo} from '../../assets';
import {Button, Input} from '../../components';
import {Font, color} from '@/styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {Controller, useForm} from 'react-hook-form';
import {Alert} from 'react-native';
import {loginHandler} from '@/apis/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {instance} from '@/apis/axios';

function Login() {
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

  // const onLoginPress = (data: {id: string; password: string}) => {
  //   loginHandler(data, navigation);
  // };

  const loginHandler = async (
    data: {id: string; password: string},
    navigation: any,
  ) => {
    try {
      const deviceToken = await AsyncStorage.getItem('deviceToken'); // Assuming you store the token
      const response = await instance.post(`/user/login`, {
        account_id: data.id,
        password: data.password,
        device_token: deviceToken, // Include the device token in the payload
      });

      await AsyncStorage.setItem('AccessToken', response.data.accessToken);
      await AsyncStorage.setItem('RefreshToken', response.data.refreshToken);
      navigation.navigate('NavBar');
    } catch (error) {
      console.error('로그인 에러:', error);
      Alert.alert('로그인 오류', '로그인이 실패했습니다.');
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
