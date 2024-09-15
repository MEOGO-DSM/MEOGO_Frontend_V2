import { Font } from "../../styles/font"
import { color } from "../../styles/color";
import styled from "styled-components/native";

interface PropsType {
  text?: string;
  mark?: boolean;
}

export const NewMarkTag = ({ text, mark }: PropsType) => {
  return (
    <Container>
      <Font text={text} />
      {
        mark ?
          (<NewMark>
            <Font text="N" kind="semi14" color="amber600" />
          </NewMark>) : (<></>)
      }
    </Container>
  )
}

const Container = styled.View`
display: flex;
flex-direction: row;
padding: 8px 10px;
gap: 10px;
border-radius: 6px;
border: 1px solid ${color.gray200};
`

const NewMark = styled.View`
width: 24px;
height: 24px;
display: flex;
align-items: center;
padding: 4px;
border-radius: 100px;
background-color: ${color.amber50};
`