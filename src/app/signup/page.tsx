import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Button, TopBar} from '../../components';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Arrow} from '../../assets';
import {color} from '../../styles';
import IdAndPassword from './IdAndPassword';
import Name from './Name';
import School from './School';
import School2 from './School2';

function Signup() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const signupPage = [
    <IdAndPassword />,
    <Name />,
    <School />,
    <School2 />,
    <School />,
  ];
  const [page, setPage] = useState<number>(0);

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
      navigation.goBack();
    }
  };

  const nextPage = () => {
    if (page < signupPage.length - 1) {
      setPage(page + 1);
    } else {
      navigation.push('Login');
    }
  };
  return (
    <Container>
      <TopBar
        text="학교 검색"
        leftIcon={
          <TouchableOpacity onPress={prevPage}>
            <Arrow />
          </TouchableOpacity>
        }
      />
      {signupPage[page]}
      {!(page === 3) && <Button text="다음" onPress={nextPage} />}
    </Container>
  );
}

export default Signup;

const Container = styled.View`
  flex: 1;
  padding: 80px 20px 24px;
  background-color: ${color.white};
  justify-content: space-between;
`;
