import React, {useState} from 'react';
import styled from 'styled-components/native';
import TopBar from '../../components/TopBar';
import {Font} from '../../styles/font';
import {color} from '../../styles/color';
import ToggleButton from '../../components/ToggleButton';
import {Image, Close} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

function EditPost() {
  const navigation = useNavigation();
  const [pressed, setPressed] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [contentValue, setContentValue] = useState<string>('');

  const handleEror = () => {
    if (
      contentValue.length == 0 ||
      contentValue.length > 300 ||
      title.length == 0 ||
      title[0] == ' '
    ) {
      return true;
    }
  };
  return (
    <>
      <TopBar
        text="글쓰기"
        leftIcon={<Close onPress={() => navigation.navigate('Community')} />}
        rightIcon={
          <TouchableOpacity onPress={() => navigation.navigate('AddTag')}>
            <Font
              text="게시"
              kind="semi18"
              color={handleEror() ? 'gray400' : 'black'}
            />
          </TouchableOpacity>
        }
      />
      <Container>
        <SchoolNameOpen>
          <Font kind="medium16" text="내 학교명 공개" />
          <ToggleButton onPress={() => setPressed(!pressed)} isOn={pressed} />
        </SchoolNameOpen>
        <EditContentBox>
          <EditTitle
            value={title}
            onChangeText={t => setTitle(t)}
            maxLength={20}
            numberOfLines={2}
            placeholder="제목을 입력하세요"
            placeholderTextColor={color.gray300}
          />
          <EditContent
            multiline
            onChangeText={t => setContentValue(t)}
            value={contentValue}
            placeholder="내용을 입력하세요"
            placeholderTextColor={color.gray300}
          />
        </EditContentBox>
      </Container>
      <AddImgButton>
        <Image color={`${color.white}`} />
      </AddImgButton>
      <TextNum>
        <Font
          text={`${contentValue.length}/300자`}
          kind="medium14"
          color={contentValue.length > 300 ? 'red' : 'gray400'}
        />
      </TextNum>
    </>
  );
}

export default EditPost;

const Container = styled.View`
  flex: 1;
  background-color: ${color.white};
  padding-top: 64px;
`;

const SchoolNameOpen = styled.View`
  width: 100%;
  padding: 12px 20px;
  border: 1px solid ${color.gray100};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const EditContentBox = styled.View`
  padding: 16px 20px;
  flex: 1;
`;

const EditTitle = styled.TextInput`
  padding: 12px 0;
  width: 100%;
  font-size: 32px;
  font-weight: 600;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray100};
`;

const EditContent = styled.TextInput`
  padding: 16px 0;
  width: 100%;
`;

const AddImgButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 100px;
  position: absolute;
  left: 20px;
  bottom: 24px;
`;

const TextNum = styled.View`
  position: absolute;
  right: 20px;
  bottom: 24px;
`;
