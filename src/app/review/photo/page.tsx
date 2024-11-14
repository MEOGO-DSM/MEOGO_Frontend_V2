import styled from "styled-components/native";
import { Font, color } from "../../../styles";
import { photo } from "../../dummy/photo";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { show, isShow, imageArray, currentIndex } from "../../../utils/store/modules/appearPhoto"
import { getSchoolImage } from "../../../apis/review";

export default function Photo() {
    const dispatch = useDispatch();

    const { data: imageData, isLoading, isError } = getSchoolImage('')

    const imageSrc = photo.flatMap((item) => item.image)

    const handleImageClick = (image: string) => {
        dispatch(show(image));
        dispatch(isShow(true));
        dispatch(imageArray(imageSrc));

        const index = imageSrc.indexOf(image)

        dispatch(currentIndex(index));
    };

    return (
        <Container>
            {photo.map((value, yearIndex) => (
                <Content key={yearIndex}>
                    <YearWrap>
                        <Font text={`${value.year}`} kind="medium20" />
                    </YearWrap>
                    <ImgContentWrap>
                        {value.image.map((image, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleImageClick(image)}
                            >
                                <Img source={{ uri: image }} />
                            </TouchableOpacity>
                        ))}
                    </ImgContentWrap>
                </Content>
            ))}
        </Container>
    );
}

const Container = styled.View`
    width: 100%;
    background-color: ${color.white};
    padding: 24px 20px;
    gap: 44px;
`;

const Content = styled.View`
    gap: 16px;
`;

const YearWrap = styled.View`
    padding: 8px 0px;
    border-bottom-width: 1px;
    border-bottom-color: ${color.gray100};
`;

const ImgContentWrap = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

const Img = styled.Image`
    width: 87px;
    height: 87px;
`;
