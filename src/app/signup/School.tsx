import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TopBar from '../../components/TopBar';
import {TouchableOpacity} from 'react-native';
import {Arrow_Left, Search} from '../../assets';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {color} from '../../styles/color';

function School({route}: any) {
  const navigation = useNavigation();
  return (
    <Container>
      <TopBar
        text="회원가입"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.navigate('Name')}>
            <Arrow_Left />
          </TouchableOpacity>
        }
      />
      <Input
        title="학교 이름"
        placeholder="재학 중인 학교 이름을 입력해주세요"
        icon={
          <Search
            onPress={() => navigation.navigate('FindSchool')}
            color={`${color.gray400}`}
          />
        }
      />
      <Button text="완료" />
    </Container>
  );
}

export default School;

const Container = styled.View`
  flex: 1;
  padding: 80px 20px 24px;
  background-color: ${color.white};
  justify-content: space-between;
`;
