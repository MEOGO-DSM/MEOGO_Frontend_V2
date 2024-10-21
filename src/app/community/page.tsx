import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {Font, color} from '@/styles';
import {Arrow, Blank, Edit} from '../../assets';
import {ContentCard} from '../../components/ContentCard';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const commuList = ['전체 커뮤니티', '대덕소프트웨어마이스터고'];

function Community() {
  const [pressed, setPressed] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(commuList[0]);

  const navigation = useNavigation<StackNavigationProp<any>>();
  const screenWidth = Dimensions.get('window').width;

  const handleSelect = (option: string) => {
    setSelected(option);
    setPressed(false);
  };

  return (
    <>
      <TopBarBox width={screenWidth}>
        <TopBar onPress={() => setPressed(!pressed)}>
          <Font kind="medium18" text={selected} />
          <Arrow rotate={pressed ? 'top' : 'bottom'} color={color.gray400} />
        </TopBar>
        {pressed &&
          commuList
            .filter(option => option !== selected)
            .map((option, index) => (
              <TopBar key={index} onPress={() => handleSelect(option)}>
                <Font kind="medium18" text={option} />
              </TopBar>
            ))}
      </TopBarBox>
      {pressed && <ModalContainer onPress={() => setPressed(false)} />}
      <Container>
        <ContentCard onPress={() => navigation.navigate('Post')} />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </Container>
      <EditPostButton onPress={() => navigation.navigate('EditPost')}>
        <Edit color="white" />
      </EditPostButton>
    </>
  );
}

export default Community;

const TopBarBox = styled.View<{width: number}>`
  width: ${({width}) => width}px;
  z-index: 1000;
  top: 0;
  position: absolute;
`;

const TopBar = styled.TouchableOpacity`
  padding: 16px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray100};
`;

const Container = styled.ScrollView`
  padding: 60px 20px 0;
  background-color: white;
`;

const ModalContainer = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  position: absolute;
`;

const EditPostButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 100px;
  position: absolute;
  right: 20px;
  bottom: 70px;
`;
