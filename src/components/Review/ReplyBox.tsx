import styled from 'styled-components/native';
import {Font, color} from '@/styles';

export default function ReplyBox() {
  return (
    <Container>
      <UserInfoWrap>
        <Font text="limda" kind="semi14" />
        <QuestionerTag>
          <Font text="질문자" kind="medium12" color="amber700" />
        </QuestionerTag>
      </UserInfoWrap>
      <Font text="룸메는 랜덤 배정인가요?" kind="regular18" />
      <Font text="02.19 23:36" kind="medium12" color="gray400" />
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  gap: 8px;
  padding: 16px 20px;
`;

const UserInfoWrap = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const QuestionerTag = styled.View`
  padding: 4px 6px;
  background-color: ${color.amber50};
`;
