import React, { useState } from "react";
import styled from "styled-components/native";
import { color } from "../../styles/color";
import { Font } from "../../styles/font";

const selectValue = ["리뷰", "Q&A", "학교 정보", "사진"];

export default function ListWrap() {
  const [selectedListValue, setSelectedListValue] = useState<number>(0);

  return (
    <Container>
      {selectValue.map((value, index) => (
        <SelectBox
          key={index}
          onPress={() => setSelectedListValue(index)}
          isSelected={selectedListValue === index}
        >
          <Font text={value} kind="semi18" color={selectedListValue === index ? "black" : "gray500"} />
        </SelectBox>
      ))}
    </Container>
  );
}

const Container = styled.View`
background-color: ${color.white};
  flex-direction: row;
  justify-content: space-around;
`;

const SelectBox = styled.TouchableOpacity<{isSelected : boolean}>`
  border-bottom-width: ${(props) => (props.isSelected ? "2px" : "0")};
  border-bottom-color: ${color.black};
  padding: 16px 8px;
`;