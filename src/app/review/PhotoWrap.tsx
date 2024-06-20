import React from "react";
import styled from "styled-components/native";
import { Font } from "../../styles/font"
import { color } from "../../styles/color";
import { yearlyPhoto } from "../dummy/yearlyPhoto"

export default function PhotoWrap() {
    return (
        <Container>
            {yearlyPhoto.map((value, index) => (
                <Content key={index}>
                    <YearWrap>
                        <Font text={`${value.year}`} kind="medium20" />
                    </YearWrap>
                    <ImgContentWrap>
                        {value.photo.map((value) => (
                            <Img source={{ uri: value }} />
                        ))}
                    </ImgContentWrap>
                </Content>
            ))}
        </Container>
    )
}

const Container = styled.View`
width: 100%;
background-color: ${color.white};
padding: 24px 20px;
gap: 44px;
`

const Content = styled.View`
gap: 16px;
`

const YearWrap = styled.View`
padding: 8px 0px;
border-bottom-width: 1px;
border-bottom-color: ${color.gray100};
`

const ImgContentWrap = styled.View`
flex-direction: row;
flex-wrap: wrap;
`

const Img = styled.Image`
width: 87px;
height: 87px;
`