import React from "react";
import styled from "styled-components/native";
import { Setting } from "../../assets"
import StarRating from "../StarRating";
import { Font } from "../../styles/font"
import { color } from "../../styles/color";
import Profile from "../../assets/Profile.png"

interface PropsType {
    userName: string,
    score: number,
    contents: string,
    image: string[]
}

export default function ReviewBox({ userName, score, contents, image }: PropsType) {
    const wrapWidth = image.length > 2 ? '100%' : `${image.length * 160}px`;

    return (
        <Container>
            <ReviewInfoWrap>
                <UserInfoWrap>
                    <ProfileImg source={Profile} />
                    <UserNameAndReview>
                        <Font text={userName} kind="medium14" />
                        <StarRating num={score} />
                    </UserNameAndReview>
                </UserInfoWrap>
                <TimeAndSetting>
                    <Font text="02.19 23:36" kind="medium12" color="gray400" />
                    <SettingWrap>
                        <Setting />
                    </SettingWrap>
                </TimeAndSetting>
            </ReviewInfoWrap>

            <Font text={contents} kind="medium14" />

            {image.length > 0 &&
                <ImgWrap width={wrapWidth} >
                    <ImgSlider contentContainerStyle={{ columnGap: 2 }} horizontal={true}>
                        {image.map((imgSrc, index) => (
                            <Img key={index} source={{ uri: imgSrc }} />
                        ))}
                    </ImgSlider>
                </ImgWrap>
            }
        </Container>
    )
}

const Container = styled.View`
padding: 24px 0;
gap: 12px;
border-bottom-color: ${color.gray100};
border-bottom-width: 1px;
`

const ReviewInfoWrap = styled.View`
flex-direction: row;
justify-content: space-between;
`

const UserInfoWrap = styled.View`
flex-direction: row;
gap: 12px;
`

const UserNameAndReview = styled.View`
gap: 2px;
`

const TimeAndSetting = styled.View`
flex-direction: row;
align-items: center;
gap: 8px;
`

const ImgWrap = styled.View<{ width: string }>`
width: ${props => props.width};
height: 160px;
display: flex;
border-radius: 8px;
overflow: hidden;
`

const ImgSlider = styled.ScrollView``;

const SettingWrap = styled.View`
padding: 4px;
`

const Img = styled.Image`
width: 160px;
height: 160px;
`

const ProfileImg = styled.Image`
width: 36px;
height: 36px;
border-radius: 100px;
border: 1px solid ${color.gray100};
`