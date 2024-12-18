import styled from "styled-components/native"
import { Font, color } from "../../styles"
import { Bell, Answer } from "../../assets"
import { useState } from "react"
import { TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from '@react-navigation/stack';
import { useQuestionTagName } from "../../utils/useQuestionTagName"

interface PropsType {
  id?: number,
  content?: string,
  date?: string,
  questionType?: string,
  accountId?: string
}

export const QuestionBox = ({ id, content, date, questionType, accountId }: PropsType) => {
  const navigation = useNavigation<StackNavigationProp<any>>()

  const [clickBell, setClickBell] = useState<boolean>(false)

  const tagName = useQuestionTagName(questionType)

  return (
    <TouchableOpacity
      key={id}
      onPress={() => navigation.navigate("QAndADetail")}>
      <QuestionContent>
        <TagAndContentWrap>
          <Tag>
            <Font text={tagName} kind="medium14" color="gray500" />
          </Tag>
          <Content>
            <Font text="Q. " kind="semi18" color="amber700" />
            <QuestionWrap>
              <Font text="기숙사에서 몇명이 함께 방을 쓰나요? 그리고 룸메는 한번 정해지면 그대로 쭉 가는건가요? 그리고 룸메는 한번 정해지면 그대로 쭉 가는건가요?" kind="regular18" numberOfLines={3} />
            </QuestionWrap>
          </Content>
        </TagAndContentWrap>
        <UserIdAndTimeWrap>
          <Font text={accountId} kind="medium14" color="gray400" />
          <Font text={date && date.substring(3)} kind="regular14" color="gray400" />
        </UserIdAndTimeWrap>
      </QuestionContent>

      <AskAndAnswerWrap>
        <ActiveWrap onPress={() => setClickBell(!clickBell)}>
          <Bell color={color.gray600} fill={clickBell} />
          <Font text="나도 궁금해요" kind="medium16" color="gray600" />
        </ActiveWrap>
        <ActiveWrap>
          <Answer color={color.gray600} />
          <Font text="답변하기" kind="medium16" color="gray600" />
        </ActiveWrap>
      </AskAndAnswerWrap>
    </TouchableOpacity>
  );
};

const QuestionContent = styled.View`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 20px;
`;

const TagAndContentWrap = styled.View`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Tag = styled.View`
  padding: 4px 8px;
  background-color: ${color.gray100};
  border-radius: 6px;
  align-self: flex-start;
`;

const Content = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const UserIdAndTimeWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AskAndAnswerWrap = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  gap: 20px;
  border: 1px solid ${color.gray100};
`;

const ActiveWrap = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  gap: 8px;
`;

const QuestionWrap = styled.View`
  flex: 1;
  overflow: hidden;
`;
