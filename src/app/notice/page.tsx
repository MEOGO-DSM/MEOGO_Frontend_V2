import { TopBar } from "../../components"
import { Arrow } from "../../assets"
import styled from "styled-components/native"
import { color, Font } from "../../styles"
import { messageList } from "../dummy/messageList"

export default function Notice() {

  const shouldHideMark = (date: string) => {
    const [datePart, timePart] = date.split(' ');
    const [day, month, year] = datePart.split('.').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);
  
    const inputDate = new Date(2000 + year, month - 1, day, hours, minutes);
    const currentDate = new Date();
  
    const timeDifference = currentDate.getTime() - inputDate.getTime();
    const twentyFourHours = 24 * 60 * 60 * 1000;
  
    return timeDifference >= twentyFourHours;
  }
  
  return (
    <>
      <TopBar
        text="알림"
        leftIcon={<Arrow onPress={() => { }} />}
      />
      {
        messageList ? <Content>
          {
            messageList.map((value, index) => (
              <MessageBox key={index}>
                <Font text={value.text} kind="medium18" />
                { !shouldHideMark(value.date) && <CheckIcon></CheckIcon> }
              </MessageBox>
            ))
          }
        </Content> : <NoContent>
          <Font text="새로운 알림이 없어요" kind="medium16" color="gray400" />
        </NoContent>
      }
    </>
  )
}

const Content = styled.View`
height: 100%;
margin-top: 64px;
padding: 8px 20px;
background-color: ${color.white};
`

const NoContent = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const MessageBox = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px 0;
border-bottom-width: 1px;
border-bottom-color: ${color.gray100};
`

const CheckIcon = styled.View`
width: 8px;
height: 8px;
background-color: ${color.amber500};
border-radius: 10px;
`