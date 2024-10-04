import { TopBar } from "../../../components"
import { Arrow } from "../../../assets"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import styled from "styled-components/native"
import FilterTag from "../../../components/Review/FilterTag"
import { QuestionBox } from "../../../components/Review/QuestionBox"
import { color } from "../../../styles"
import { ScrollView } from "react-native"

export default function QuestionTagGather() {

  const navigation = useNavigation<StackNavigationProp<any>>()

  return (
    <>
      <TopBar
        text="대덕소프트웨어마이스터고"
        leftIcon={<Arrow onPress={() => { navigation.navigate("Review") }} />}
      />
      <Content>
        <FilterWrap>
          <FilterTag />
        </FilterWrap>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
        </ScrollView>
      </Content>
    </>
  )
}

const Content = styled.View`
margin-top: 56px;
background-color: ${color.white};
`

const FilterWrap = styled.View`
  padding: 8px 0;
`