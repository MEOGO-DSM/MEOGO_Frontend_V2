import React, {useState, useEffect} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TopBar from '../../components/TopBar';
import {TouchableOpacity} from 'react-native';
import {Arrow, Search} from '../../assets';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {color} from '../../styles/color';

function School2({route}: any) {
  const navigation = useNavigation();
  const {schoolName} = route.params;

  const [inputValue, setInputValue] = useState<string>(schoolName);

  useEffect(() => {
    if (schoolName) {
      setInputValue(schoolName);
    }
  }, [schoolName]);

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  return (
    <Container>
      <TopBar
        text="회원가입"
        leftIcon={
          <TouchableOpacity onPress={() => navigation.navigate('FindSchool')}>
            <Arrow />
          </TouchableOpacity>
        }
      />
      <Input
        title="학교 이름"
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="재학 중인 학교 이름을 입력해주세요"
        icon={
          <Search
            onPress={() => navigation.navigate('FindSchool')}
            color={`${color.gray400}`}
          />
        }
      />
      <Button text="완료" onPress={() => navigation.navigate('Login')} />
    </Container>
  );
}

export default School2;

const Container = styled.View`
  flex: 1;
  padding: 80px 20px 24px;
  background-color: ${color.white};
  justify-content: space-between;
`;
