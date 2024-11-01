import React, { useState } from "react";
import styled from "styled-components/native";
import { TopBar } from "../../../components/TopBar";
import { TouchableOpacity } from "react-native";
import { color, Font } from "../../../styles";
import Tag from "../../../components/Review/Tag";
import { Arrow } from "../../../assets/Arrow";
import { useNavigation } from "@react-navigation/native";
import { uploadReview } from "../../../apis/review/uploadReview";
import { useSelector } from 'react-redux';
import { RootState } from '../../../utils/store/store';
import { useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { keyword } from "../../dummy/keyword";

interface RouteParams {
    rating: number;
    contentValue: string;
}

interface KeywordType {
    keyword: string;
    category: "EDUCATION" | "ACTIVITY" | "FACILITY";
}

interface CategoriesType {
    교육: KeywordType[];
    활동: KeywordType[];
    시설: KeywordType[];
}

const categories: CategoriesType = {
    교육: [],
    활동: [],
    시설: [],
};

const categoryMapping: { [key: string]: keyof CategoriesType } = {
    "EDUCATION": "교육",
    "ACTIVITY": "활동",
    "FACILITY": "시설",
};

keyword.forEach(item => {
    const categoryKey = categoryMapping[item.category];
    if (categoryKey) {
        categories[categoryKey].push(item);
    }
});

const Keyword = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const images = useSelector((state: RootState) => state.imageAddRemove.image);
    const route = useRoute();
    const { rating, contentValue } = route.params as RouteParams;

    const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

    const handleTagPress = (tag: string) => {
        setSelectedKeywords(prevState => {
            const isSelected = prevState.includes(tag);
            if (isSelected) {
                return prevState.filter(value => value !== tag);
            }
            if (prevState.length < 5) {
                return [...prevState, tag];
            }
            return prevState;
        });
    };

    const handleSubmit = async () => {
        const response = await uploadReview(images, contentValue, rating, selectedKeywords);
        if (response) {
            console.log("리뷰가 성공적으로 작성되었습니다");
            navigation.navigate('Review');
        } else {
            console.log('리뷰 작성이 실패하였습니다');
        }
    };

    return (
        <Container>
            <TopBar
                text="키워드 리뷰"
                leftIcon={<Arrow onPress={() => navigation.navigate('ReviewWrite')} />}
                rightIcon={
                    <TouchableOpacity onPress={handleSubmit}>
                        <Font
                            text="등록"
                            kind="semi18"
                            color={selectedKeywords.length === 0 ? "gray400" : "amber700"}
                        />
                    </TouchableOpacity>
                }
            />
            <Content>
                <TitleWrap>
                    <Font text="어떤 점이 좋은가요?" kind="semi24" />
                    <Font text="이 학교에 어울리는 키워드를 1~5개 골라주세요." kind="medium16" color="gray500" />
                </TitleWrap>
                {Object.entries(categories).map(([category, items]) => (
                    <KeyWordSectionBox key={category}>
                        <Font text={category} kind="semi18" />
                        <TagWrap>
                            {items.map(item => (
                                <Tag
                                    key={item.keyword}
                                    text={item.keyword}
                                    onPress={() => handleTagPress(item.keyword)}
                                    selected={selectedKeywords.includes(item.keyword)}
                                />
                            ))}
                        </TagWrap>
                    </KeyWordSectionBox>
                ))}
            </Content>
        </Container>
    );
};

const Container = styled.View`
    padding-top: 60px;
    background-color: ${color.white};
    flex: 1;
`;

const Content = styled.View`
    padding: 16px 20px;
    gap: 20px;
`;

const TitleWrap = styled.View`
    gap: 4px;
`;

const KeyWordSectionBox = styled.View`
    gap: 16px;
`;

const TagWrap = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

export default Keyword;
