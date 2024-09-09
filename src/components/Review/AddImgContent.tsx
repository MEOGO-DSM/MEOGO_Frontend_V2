import React from "react";
import styled from "styled-components/native";
import { Close } from "../../assets";
import { color } from "../../styles/color"

export default function AddImgContent() {
    return (
        <Container>
            <ImgContent source={{ uri: "https://img.hankyung.com/photo/202102/AD.25399510.1.jpg" }} />
            <CancelButton>
                <Close size={16} />
            </CancelButton>
        </Container >
    )
}

const Container = styled.View`
position: relative;
width: 100px;
height: 100px;
background-color: pink;
border: 1px solid ${color.gray100};
border-radius: 16px;
overflow: hidden;
`

const ImgContent = styled.Image`
width: 100%;
height: 100%;
`

const CancelButton = styled.View`
position: absolute;
top: 6px;
right: 6px;
padding: 4px;
background-color: #F4F4F5;
opacity: 0.2;
border-radius: 100px;
justify-content: center;
align-items: center;
`