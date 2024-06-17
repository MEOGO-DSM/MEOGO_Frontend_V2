import React, {useState} from 'react';
import styled from 'styled-components/native';
import TopBar from '../../components/TopBar';
import {Arrow, Close, Plus} from '../../assets';
import {TouchableOpacity} from 'react-native';
import {Font} from '../../styles/font';
import {useNavigation} from '@react-navigation/native';
import Input from '../../components/Input';
import {color} from '../../styles/color';

function AddTag() {
  const [inputValue, setInputValue] = useState<string>('');
  const [tagList, setTagList] = useState<string[]>(['학교폭파', '내인생']);
  const navigation = useNavigation();
  const tagPattern = /^[^\s!@#$%^&*()\-=+{};:',<.>/?[\]\\]*$/;

  const handleAddTag = () => {
    if (
      inputValue &&
      tagList.length < 5 &&
      tagPattern.test(inputValue) &&
      inputValue.length <= 20
    ) {
      setTagList(arr => [...arr, inputValue]);
      setInputValue('');
    }
  };

  const handleError = () => {
    if (tagList.length >= 5) {
      return '태그는 최대 5개까지만 넣을 수 있습니다.';
    }
    if (!tagPattern.test(inputValue)) {
      return '사용할 수 없는 문자가 포함되어있습니다.';
    }
    return '';
  };

  const handleDeleteTag = (index: number) => {
    setTagList(tagList.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: any) => {
    if (e.nativeEvent.key === 'enter') {
      handleAddTag();
    }
  };

  return (
    <>
      <TopBar
        leftIcon={<Arrow onPress={() => navigation.goBack()} />}
        rightIcon={
          <TouchableOpacity onPress={() => navigation.navigate('Community')}>
            <Font kind="semi18" text="게시하기" color="amber700" />
          </TouchableOpacity>
        }
      />
      <Container>
        <Input
          value={inputValue}
          onChangeText={t => setInputValue(t)}
          onKeyPress={handleKeyPress}
          title="태그"
          placeholder="태그를 입력해주세요"
          icon={<Plus onPress={handleAddTag} />}
          errorMessage={`${handleError()}`}
        />

        <Warning>
          <Font
            kind="regular12"
            color="gray700"
            text="태그는 최대 5개, 1개당 20자까지 입력할 수 있습니다. 밑줄(_)을 제외한 특수문자와 공백이 들어가있는 문자는 태그로 사용할 수 없습니다."
          />
        </Warning>
        <TagContainer>
          <SchoolTagBox>
            <Font
              kind="medium14"
              text="대덕소프트웨어마이스터고"
              color="amber900"
            />
          </SchoolTagBox>
          {tagList.map((i, j) => (
            <TagBox key={j} onPress={() => handleDeleteTag(j)}>
              <Font kind="medium14" text={i} />
              <Close size={16} color={`${color.gray400}`} />
            </TagBox>
          ))}
        </TagContainer>
      </Container>
    </>
  );
}

export default AddTag;

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 64px 20px 16px;
  gap: 8px;
`;

const Warning = styled.View`
  width: 100%;
  padding: 0 4px;
`;

const TagContainer = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 16px 0;
  gap: 8px;
`;

const TagBox = styled.TouchableOpacity`
  border-radius: 100px;
  background-color: ${color.white};
  border: 1px solid ${color.gray700};
  flex-direction: row;
  padding: 6px 12px;
  gap: 8px;
`;

const SchoolTagBox = styled.View`
  padding: 6px 8px;
  border-radius: 6px;
  background-color: ${color.amber50};
`;
