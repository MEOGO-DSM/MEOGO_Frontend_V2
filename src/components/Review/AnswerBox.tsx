import styled from 'styled-components/native';
import {Font, color} from '@/styles';
import {Heart, Setting, Answer} from '../../assets';
import ReplyBox from './ReplyBox';

export default function AnswerBox() {
  return (
    <>
      <AnswerBoxWrap>
        <AnswerWrap>
          <UserIdAndSetting>
            <Font text="hamster" kind="semi14" />
            <SettingIcon>
              <Setting size={20} color="gray500" />
            </SettingIcon>
          </UserIdAndSetting>
          <Font
            text="보통 2~3명이 한 방을 쓰고, 학기 단위로 룸메가 바뀝니다."
            kind="regular18"
          />
          <Font text="02.19 23:36" kind="medium12" color="gray400" />
        </AnswerWrap>

        <HeartAndReply>
          <ActiveWrap>
            <Heart color={color.gray600} />
            <Font text="4" kind="medium16" color="gray600" />
          </ActiveWrap>
          <ActiveWrap>
            <Answer size={20} color={color.gray600} />
            <Font text="4" kind="medium16" color="gray600" />
          </ActiveWrap>
        </HeartAndReply>

        <ReplyWrap>
          <ReplyBox />
          <ReplyBox />
        </ReplyWrap>
      </AnswerBoxWrap>
    </>
  );
}

const AnswerBoxWrap = styled.View`
  background-color: ${color.white};
`;

const AnswerWrap = styled.View`
  display: flex;
  gap: 8px;
  padding: 16px 20px;
`;

const UserIdAndSetting = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeartAndReply = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0 16px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-color: ${color.gray100};
  border-bottom-color: ${color.gray100};
`;

const ActiveWrap = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 16px 8px;
`;

const ReplyWrap = styled.View`
  display: flex;
  gap: 2px;
  padding-left: 20px;
`;

const SettingIcon = styled.View`
  padding: 4px;
`;
