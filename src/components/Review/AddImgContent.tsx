import React from "react";
import styled from "styled-components/native";
import { Close } from "../../assets";
import { color } from "../../styles/color"
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../utils/store/modules/imageAddRemove"
import { RootState } from "../../utils/store/store";

export default function AddImgContent() {
    const dispatch = useDispatch()
    const image = useSelector((state: RootState) => state.imageAddRemove.image)

    return (
        <>
            {image.map((value: string, index: number) => (
                <Container key={index}>
                    <ImgContent source={{ uri: value }} />
                    <CancelButton onPress={() => dispatch(remove(value))}>
                        <Close size={16} />
                    </CancelButton>
                </Container >
            ))}
        </>
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

const CancelButton = styled.TouchableOpacity`
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