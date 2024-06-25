import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Logo} from '../../assets';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Font} from '../../styles/font';
import {color} from '../../styles/color';
import {useNavigation} from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo size={64} />
      <LoginBox>
        <InputBox>
          <Input noError placeholder="아이디" />
          <Input placeholder="비밀번호" password />
        </InputBox>
        <ButtonBox>
          <Button onPress={() => navigation.navigate('NavBar')} text="로그인" />
          <GotoSignupBox>
            <Font kind="medium14" text="계정이 없으신가요?" color="gray500" />
            <MoveSignup onPress={() => navigation.navigate('IdAndPassword')}>
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
