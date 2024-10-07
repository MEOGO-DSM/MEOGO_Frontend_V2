import { useState } from 'react'
import styled from "styled-components/native";
import { Font, color } from "../../styles";
import { Heart, Setting, Answer } from "../../assets"
import ReplyBox from "./ReplyBox";
import QuestionerTag from './QuestionerTag';

interface PropsType {
  id?: number,
  writerId?: string,
  date?: string,
  content?: string,
  replies?: Array<any>
  accountId?: string
}

export default function AnswerBox({ id, writerId, date, content, replies, accountId }: PropsType) {
  const [pressHeart, setPressHeart] = useState<boolean>(false)

  return (
    <>
      <AnswerBoxWrap key={id}>
        <AnswerWrap>
          <UserIdAndSetting>
            <UserIdWrap>
              <Font text={accountId} kind="semi14" />
              {
                writerId === accountId &&
                <QuestionerTag />
              }
            </UserIdWrap>
            <SettingIcon>
              <Setting size={20} color={color.gray500} />
            </SettingIcon>
          </UserIdAndSetting>
          <Font text={content} kind="regular18" />
          <Font text={date && date.substring(4)} kind="medium12" color="gray400" />
        </AnswerWrap>

        <HeartAndReply>
          <ActiveWrap onPress={() => setPressHeart(!pressHeart)}>
            <Heart
              color={pressHeart ? color.amber600 : color.gray600}
              fill={pressHeart ? color.amber600 : 'none'}
            />
            <Font text="4" kind="medium16" color="gray600" />
          </ActiveWrap>
          <ActiveWrap>
            <Answer size={20} color={color.gray600} />
            <Font text="4" kind="medium16" color="gray600" />
          </ActiveWrap>
        </HeartAndReply>

        <ReplyWrap>
          {
            replies?.map(({ id, account_id, date, content }) => (
              <ReplyBox
                id={id}
                accountId={account_id}
                date={date}
                content={content}
                writerId={writerId}
              />
            ))
          }
        </ReplyWrap>
      </AnswerBoxWrap>
    </>
  )
}

const AnswerBoxWrap = styled.View`
background-color: ${color.white};
`

const AnswerWrap = styled.View`
display: flex;
gap: 8px;
padding: 16px 20px;
`

const UserIdAndSetting = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

const UserIdWrap = styled.View`
display: flex;
flex-direction: row;
gap: 8px;
align-items: center;
`

const HeartAndReply = styled.View`
display: flex;
flex-direction: row;
padding: 0 16px;
border-top-width: 1px;
border-bottom-width: 1px;
border-top-color: ${color.gray100};
border-bottom-color: ${color.gray100};
`

const ActiveWrap = styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center;
gap: 4px;
padding: 16px 8px;
`

const ReplyWrap = styled.View`
display: flex;
gap: 2px;
padding-left: 20px;
`

const SettingIcon = styled.View`
  padding: 4px;
`