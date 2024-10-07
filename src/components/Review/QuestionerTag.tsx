import styled from "styled-components/native";
import { Font, color } from "../../styles";

export default function QuestionerTag() {
  return (
    <Container>
      <Font text="질문자" kind="medium12" color="amber700" />
    </Container>
  )
}

const Container = styled.View`
padding: 4px 6px;
background-color: ${color.amber50};
`