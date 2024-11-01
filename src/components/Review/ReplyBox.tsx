import styled from "styled-components/native";
import { Font } from "../../styles";
import QuestionerTag from "./QuestionerTag";

interface PropsType {
  id?: number,
  accountId?: string,
  date?: string,
  content?: string,
  writerId?: string
}

export default function ReplyBox({ id, accountId, date, content, writerId }: PropsType) {
  return (
    <Container key={id}>
      <UserInfoWrap>
        <Font text={accountId} kind="semi14" />
        {
          accountId === writerId &&
          <QuestionerTag />
        }
      </UserInfoWrap>
      <Font text={content} kind="regular18" />
      <Font text={date && date.substring(4)} kind="medium12" color="gray400" />
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
`