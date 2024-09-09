
import React, {useState} from 'react';
import {Arrow} from '../../assets';
import {styled} from 'styled-components/native';
import {color} from '../../styles';
import {Button, Input, TopBar} from '../../components';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/core';
import {TouchableOpacity} from 'react-native';
// import {handleSignup} from '../../utils';

function IdAndPassword() {
  const [data, setData] = useState({id: '', password: '', passwordCheck: ''});
  const [error, setError] = useState();
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <>
      <InputBox>
        <Input
          autoFocus
          onChangeText={text => {
            setData(prev => ({...prev, id: text}));
          }}
          title="아이디"
          placeholder="최소 5자, 최대 15자"
        />
        <Input
          onChangeText={text => {
            setData(prev => ({...prev, password: text}));
          }}
          password
          title="비밀번호"
          placeholder="특수문자 1자 이상, 최대 20자"
        />

        <Input
          onChangeText={text => {
            setData(prev => ({...prev, passwordCheck: text}));
          }}
          password
          title="비밀번호 확인"
          placeholder="비밀번호"
        />
      </InputBox>
    </>
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
