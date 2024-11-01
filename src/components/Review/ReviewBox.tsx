import React from "react";
import styled from "styled-components/native";
import { Setting } from "../../assets"
import StarRating from "../StarRating";
import { Font } from "../../styles/font"
import { color } from "../../styles/color";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
import { show, isShow, imageArray, currentIndex } from "../../utils/store/modules/appearPhoto"

interface reviewBoxType {
    id?: number,
    content?: string,
    date?: string,
    user_name?: string,
    profile?: string,
    star?: number,
    image?: Array<string>
}

export default function ReviewBox({ id, content, date, user_name, profile, star, image = [] }: reviewBoxType) {
    const wrapWidth = image ? (image.length > 2 ? '100%' : `${image.length * 160}px`) : '0';

    const dateTime = date?.substring(3)

    const dispatch = useDispatch();

    const handleImageClick = (imgSrc: string, index: number) => {
        dispatch(show(imgSrc));
        dispatch(isShow(true));
        dispatch(imageArray(image));
        dispatch(currentIndex(index))
    };

    return (
        <Container key={id}>
            <ReviewInfoWrap>
                <UserInfoWrap>
                    <ProfileImg source={{ uri: profile }} />
                    <UserNameAndReview>
                        <Font text={user_name} kind="medium14" />
                        <StarRating num={star} />
                    </UserNameAndReview>
                </UserInfoWrap>
                <TimeAndSetting>
                    <Font text={dateTime} kind="medium12" color="gray400" />
                    <SettingWrap>
                        <Setting />
                    </SettingWrap>
                </TimeAndSetting>
            </ReviewInfoWrap>

            <Font text={content} kind="medium14" />

            {image && image.length > 0 &&
                <ImgWrap width={wrapWidth} >
                    <ImgSlider contentContainerStyle={{ columnGap: 2 }} horizontal={true}>
                        {image.map((imgSrc, index) => (
                            <TouchableOpacity onPress={() => handleImageClick(imgSrc, index)}>
                                <Img
                                    key={index}
                                    source={{ uri: imgSrc }}
                                />
                            </TouchableOpacity>
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
`;

const ReviewInfoWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const UserInfoWrap = styled.View`
  flex-direction: row;
  gap: 12px;
`;

const UserNameAndReview = styled.View`
  gap: 2px;
`;

const TimeAndSetting = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const ImgWrap = styled.View<{width: string}>`
  width: ${props => props.width};
  height: 160px;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`;

const ImgSlider = styled.ScrollView``;

const SettingWrap = styled.View`
  padding: 4px;
`;

const Img = styled.Image`
  width: 160px;
  height: 160px;
`;

const ProfileImg = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 100px;
  border: 1px solid ${color.gray100};
`;
