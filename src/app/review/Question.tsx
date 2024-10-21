import {TopBar} from '../../components';
import {Close} from '../../assets';
import {TouchableOpacity} from 'react-native';
import {Font, color} from '@/styles';
import {useState} from 'react';
import {Dropdown} from '../../components/Dropdown';
import styled from 'styled-components/native';

const category = ['학교생활질문', '그외', '입학질문'];

export default function Question() {
  const [isError, setIsError] = useState<boolean>(true);
  const [contentValue, setContentValue] = useState<string>('');
  const [limit, setLimit] = useState<number>(0);

  const handleChangeInput = (text: string) => {
    setContentValue(text);
    setLimit(text.length);
  };

  return (
    <>
      <TopBar
        text="글쓰기"
        leftIcon={<Close onPress={() => {}} />}
        rightIcon={
          <TouchableOpacity onPress={() => {}}>
            <Font
              text="게시"
              kind="semi18"
              color={isError ? 'gray400' : 'black'}
            />
          </TouchableOpacity>
        }
      />
      <Container>
        <SelectWrap>
          <Dropdown
            defaultValue="카테고리"
            items={category}
            onSelect={() => {}}
          />
        </SelectWrap>

        <WriteWrap>
          <TitleTextInput placeholder="제목을 입력하세요" />
          <ContentTextInput
            multiline
            placeholder="본문을 입력하세요"
            placeholderTextColor={color.gray300}
            onChangeText={handleChangeInput}
            value={contentValue}
          />
          <LimitText>
            <Font
              text={`${limit}/300 자`}
              kind="medium14"
              color={`${limit > 300 ? 'red' : 'gray400'}`}
            />
          </LimitText>
        </WriteWrap>
      </Container>
    </>
  );
}

const Container = styled.View`
  height: 100%;
  background-color: ${color.white};
  padding: 64px 0;
`;

const SelectWrap = styled.View`
  padding: 4px 20px;
`;

const WriteWrap = styled.View`
  height: 100%;
  padding: 16px 20px;
`;

const TitleTextInput = styled.TextInput.attrs({
  placeholderTextColor: color.gray300,
})`
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray100};
  font-size: 32px;
  font-weight: 600;
`;

const ContentTextInput = styled.TextInput.attrs({
  placeholderTextColor: color.gray300,
})`
  flex: 1;
  padding: 16px 0;
  font-size: 16px;
  font-weight: 500;
  text-align-vertical: top;
`;

const LimitText = styled.View`
  align-items: flex-end;
`;
