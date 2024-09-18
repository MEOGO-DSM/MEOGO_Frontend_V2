import React from "react";
import styled from "styled-components/native";
import {Font} from "../../styles/font"
import { color } from "../../styles/color";

interface PropsType {
    text?: string
    selected?: boolean
    onPress?: () => void
}

export default function Tag({text, selected = false, onPress} : PropsType) {
    return (
        <Container selected={selected} onPress={onPress}>
                <StyledFont text={text} kind="regular16" selected={selected}/>
        </Container>
    )
}

const Container = styled.TouchableOpacity<{selected : boolean}>`
padding: 8px 12px;
background-color: ${({ selected }) => (selected ? color.amber50 : color.white)};
border: 1px solid ${({ selected }) => (selected ? color.amber200 : color.gray200)};
border-radius: 4px;
`

const StyledFont = styled(Font)<{selected : boolean}>`
    color: ${({ selected }) => (selected ? color.amber800 : color.black)};
`
