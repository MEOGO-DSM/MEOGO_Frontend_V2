import { TopBar } from "../../../components"
import { Close } from "../../../assets"
import { TouchableOpacity } from 'react-native'
import { Font, color } from '../../../styles'
import { useEffect, useState } from "react"
import { Dropdown } from "../../../components/Dropdown"
import styled from "styled-components/native"
import { createQuestion } from "../../../apis/question"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

type QuestionType = 'LIFE' | 'ENTRANCE' | 'FACILITIES' | 'ETC';

const categories = ["학교생활질문", "입학질문", "학교시설관련질문", "그외"];

const questionTypeMap: Record<string, QuestionType> = {
  "학교생활질문": 'LIFE',
  "입학질문": 'ENTRANCE',
  "학교시설관련질문": 'FACILITIES',
  "그외": 'ETC',
};

export default function Write() {

  const navigation = useNavigation<StackNavigationProp<any>>()

  const school_id = 1;

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [limit, setLimit] = useState<number>(0);
  const [questionType, setQuestionType] = useState<QuestionType | null>(null);
  const [isError, setIsError] = useState<boolean>(true);

  useEffect(() => {
    setIsError(!(title && content && questionType));
  }, [title, content, questionType]);

  const handleChangeTitle = (text: string) => {
    setTitle(text);
  };

  const handleChangeInput = (text: string) => {
    setContent(text);
    setLimit(text.length);
  };

  const handleSelectCategory = (value: string) => {
    setQuestionType(questionTypeMap[value] || null);
  };

  const handleSubmit = async () => {
    if (isError) {
      console.log("업로드할 수 없습니다");
      return;
    }

    console.log(questionType, title, content);

    createQuestion()
    navigation.navigate('Review')
  }

  return (
    <>
      <TopBar
        text="글쓰기"
        leftIcon={<Close onPress={() => navigation.navigate('Review')} />}
        rightIcon={
          <TouchableOpacity onPress={handleSubmit}>
            <Font
              text="게시"
              kind="semi18"
              color={isError ? 'gray400' : 'amber700'}
            />
          </TouchableOpacity>
        }
      />
      <Container>
        <SelectWrap>
          <Dropdown
            width={'100%'}
            defaultValue="카테고리"
            items={categories}
            onSelect={handleSelectCategory}
          />
        </SelectWrap>

        <WriteWrap>
          <TitleTextInput
            placeholder="제목을 입력하세요"
            onChangeText={handleChangeTitle}
          />
          <ContentTextInput
            multiline
            placeholder="본문을 입력하세요"
            placeholderTextColor={color.gray300}
            onChangeText={handleChangeInput}
            value={content} />
          <LimitText>
            <Font text={`${limit}/300 자`} kind="medium14" color={`${limit > 300 ? "red" : "gray400"}`} />
          </LimitText>
        </WriteWrap>
      </Container>
    </>
  )
}

const Container = styled.View`
height: 100%;
background-color: ${color.white};
padding: 64px 0;
`

const SelectWrap = styled.View`
padding: 4px 20px;
`

const WriteWrap = styled.View`
flex: 1;
padding: 16px 20px;
`

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