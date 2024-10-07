import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TopBar } from "../../../components";
import { Arrow, Setting } from '../../../assets';
import styled from "styled-components/native";
import { Font, color } from "../../../styles";
import AnswerBox from '../../../components/Review/AnswerBox';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { selectTag } from '../../../utils/store/modules/questionTagSelect'
import { questionDetail } from '../../dummy/questionDetail';

export default function Detail() {

  const dispatch = useDispatch()

  const navigation = useNavigation<StackNavigationProp<any>>()

  const handleQuestionList = (value: string) => {
    dispatch(selectTag(value))
    navigation.navigate('QuestionTagGather')
  }

  return (
    <>
      <TopBar
        text="대덕소프트웨어마이스터고"
        leftIcon={<Arrow onPress={() => { navigation.navigate("Review") }} />}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={{ flex: 1, }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container key={questionDetail.id}>
            <QuestionWrap>
              <InfoAndContent>
                <InfoWrap>
                  <UserIdAndTime>
                    <Font text={questionDetail.account_id} kind="semi14" />
                    <Font text={questionDetail.date && questionDetail.date.substring(4)} kind="medium12" color="gray400" />
                  </UserIdAndTime>
                  <SettingIcon>
                    <Setting color={color.gray500} rotate="horizontal" />
                  </SettingIcon>
                </InfoWrap>
                <Content>
                  <Font text="Q. " kind="semi18" color="amber700" />
                  <Font text={questionDetail.content} kind="regular18" numberOfLines={3} />
                </Content>
              </InfoAndContent>
              <QuestionTypeWrap onPress={() => handleQuestionList("학교생활질문")}>
                <Font text="학교생활질문" kind="medium14" color="gray600" />
                <Arrow size={18} color={color.gray600} rotate="right" />
              </QuestionTypeWrap>
            </QuestionWrap>

            <AnswerSortWrap>
              <Font text={`${questionDetail.comments.count}개의 답변`} kind="semi16" />
              <SortWrap>
                <Font text="추천순" kind="medium14" color="gray500" />
                <Arrow size={16} color={color.gray500} rotate="bottom" />
              </SortWrap>
            </AnswerSortWrap>

            {
              questionDetail.comments.comment_list.map(({ id, account_id, date, content, replies }) => (
                <AnswerBox
                  id={id}
                  writerId={questionDetail.account_id}
                  accountId={account_id}
                  date={date}
                  content={content}
                  replies={replies}
                />
              ))
            }
          </Container>
        </ScrollView>

        <Input placeholder="댓글을 입력해주세요" />
      </KeyboardAvoidingView>
    </>
  );
}

const Container = styled.View`
  flex: 1;
  padding: 56px 0 70px;
  gap: 4px;
  background-color: ${color.gray100};
`;

const QuestionWrap = styled.View`
  display: flex;
  gap: 24px;
  padding: 16px 20px;
  background-color: ${color.white};
`;

const InfoAndContent = styled.View`
  display: flex;
  gap: 12px;
`;

const InfoWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray100};
`;

const UserIdAndTime = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Content = styled.View`
  width: 100%;
  display: flex;
  gap: 4px;
`;

const QuestionTypeWrap = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
`;

const AnswerSortWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: ${color.white};
`;

const SortWrap = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

const SettingIcon = styled.View`
  padding: 4px;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: color.gray300,
})`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 16px 20px;
  border-top-width: 1px;
  border-top-color: ${color.gray400};
  background-color: ${color.white};
  font-size: 16px;
  font-weight: 500;
`;
