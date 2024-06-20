import React from "react";
import styled from "styled-components/native";
import TopBar from "../../components/TopBar";
import { Media, Close } from "../../assets"
import { Font } from "../../styles/font"
import { TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { color } from "../../styles/color"
import StarRating from "../../components/Review/StarRating";
import AddImgContent from "../../components/Review/AddImgContent"

export default function ReviewWrite() {

    const navigation = useNavigation()

    const handleError = () => { }

    return (
        <>
            <TopBar
                text="리뷰 작성"
                leftIcon={<Close onPress={() => navigation.navigate('Review')} />}
                rightIcon={
                    <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                        <Font
                            text="등록"
                            kind="semi18"
                            color={handleError() ? 'gray400' : 'black'}
                        />
                    </TouchableOpacity>
                }
            />
            <Container>
                <ScoreWrap>
                    {/* <StarRating /> */}
                </ScoreWrap>
                <ContentBox>
                    <WriteWrap>
                        <MainTextWrap
                            multiline
                            placeholder="본문을 입력하세요"
                            placeholderTextColor={color.gray300}
                        >
                        </MainTextWrap>
                    </WriteWrap>
                    <LimitText>
                        <Font text="0/300 자" kind="medium14" color="gray400" />
                    </LimitText>
                    <ImgWrap>
                        <Font text="이미지" kind="semi20" />
                        <UploadWrap>
                            <ImgUploadBox>
                                <Media color="gray300" />
                            </ImgUploadBox>
                            <AddImgContent />
                            <AddImgContent />
                        </UploadWrap>
                    </ImgWrap>
                </ContentBox>
            </Container>
        </>
    )
}

const Container = styled.View`
  background-color: ${color.white};
  padding-top: 64px;
`

const ScoreWrap = styled.View`
padding: 20px;
align-items: center;
border-top-width: 1px;
  border-top-color: ${color.gray100};
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray100};
`

const ContentBox = styled.View`
padding: 16px 20px;
gap: 24px;
`

const WriteWrap = styled.View`
height: 349px;
`

const MainTextWrap = styled.TextInput`
  font-size: 16px;
  font-weight: 500;
`

const LimitText = styled.View`
align-items: flex-end;
`

const ImgWrap = styled.View`
padding: 24px 0;
gap: 16px;
background-color: white;

`

const UploadWrap = styled.View`
flex-direction: row;
gap: 8px;
`

const ImgUploadBox = styled.View`
width: 100px;
height: 100px;
justify-content: center;
align-items: center;
background-color: ${color.gray50};
border: 1px solid ${color.gray200};
border-radius: 16px;
`