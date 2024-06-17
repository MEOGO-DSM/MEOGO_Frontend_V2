import React from 'react';
import TopBar from '../../components/TopBar';
import {Arrow} from '../../assets';
import {styled} from 'styled-components/native';
import Input from '../../components/Input';
import {color} from '../../styles/color';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

function IdAndPassword() {
  const navigation = useNavigation();
  return (
    <Container>
      <TopBar
        text="회원가입"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Arrow />
          </TouchableOpacity>
        }
      />
      <InputBox>
        <Input autoFocus title="아이디" placeholder="최소 5자, 최대 15자" />
        <Input
          password
          title="비밀번호"
          placeholder="특수문자 1자 이상, 최대 20자"
        />
        <Input password title="비밀번호 확인" placeholder="비밀번호" />
      </InputBox>
      <Button text="다음" onPress={() => navigation.navigate('Name')} />
    </Container>
  );
}

export default IdAndPassword;

const Container = styled.View`
  flex: 1;
  padding: 80px 20px 24px;
  background-color: ${color.white};
  justify-content: space-between;
`;

const InputBox = styled.View`
  gap: 12px;
  width: 100%;
`;
