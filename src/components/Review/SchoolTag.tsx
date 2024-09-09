import React from "react";
import styled from "styled-components/native";
import {color} from "../../styles/color"
import {Font} from "../../styles/font"

export default function SchoolTag({text}) {
    return (
        <Container>
            <Font text={text} kind="semi12" color="gray600"/>
        </Container>
    )
}

const Container = styled.View`
background-color: ${color.gray100};
border-radius: 4px;
padding: 6px 8px;
`