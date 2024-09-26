import React from "react";
import styled from "styled-components/native";
import { Font } from "../../styles/font"
import { color } from "../../styles/color";
import { photo } from "../dummy/photo"
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { show, isShow, currentIndex, currentYear } from "../../utils/store/modules/appearExpandPhoto";

export default function Photo() {
    const dispatch = useDispatch()

    const handleClick = (image: string, year: number, index: number) => {
        dispatch(show(image))
        dispatch(isShow(true))

        dispatch(currentIndex(index))
        dispatch(currentYear(year))
    }

    return (
        <>
            <Container>
                {photo.map((value) => (
                    <Content>
                        <YearWrap>
                            <Font text={`${value.year}`} kind="medium20" />
                        </YearWrap>
                        <ImgContentWrap>
                            {value.image.map((image, index) => (
                                <TouchableOpacity onPress={() => handleClick(image, value.year, index)}>
                                    <Img source={{ uri: image }} />
                                </TouchableOpacity>
                            ))}
                        </ImgContentWrap>
                    </Content>
                ))}
            </Container>
        </>
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