import { useState } from "react";
import styled from "styled-components/native";
import { TopBar } from "../../../components/TopBar";
import { TouchableOpacity } from "react-native";
import { color, Font } from "../../../styles";
import Tag from "../../../components/Review/Tag";
import { Arrow } from "../../../assets/Arrow";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createReview, getKeyword } from "../../../apis/review"
import { useSelector } from 'react-redux';
import { RootState } from '../../../utils/store/store';
import { StackNavigationProp } from '@react-navigation/stack';
import { keywordDummy } from "../../dummy/keyword";
import { CategorizedKeywords } from "../../../interfaces";

const Keyword = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    // const images = useSelector((state: RootState) => state.imageAddRemove.image);
    // const route = useRoute();
    // const { rating, contentValue } = route.params as RouteParams;

    const { data: KeywordData, isLoading, isError } = getKeyword()

    const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

    const categorizedKeywords = keywordDummy.reduce<CategorizedKeywords>((acc: any, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item.keyword);
        return acc;
    }, {
        EDUCATION: [],
        ACTIVITY: [],
        FACILITY: []
    });

    const categoryNames: { [key: string]: string } = {
        EDUCATION: "교육",
        ACTIVITY: "활동",
        FACILITY: "시설"
      };

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

    const handleSubmit = () => {
        createReview();
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

                {Object.entries(categorizedKeywords).map(([category, keywords]) => (
                    <KeyWordSectionBox key={category}>
                        <Font text={categoryNames[category] || "기타"} kind="semi18" />
                        <TagWrap>
                            {keywords.map((keyword: string) => (
                                <Tag
                                    key={keyword}
                                    text={keyword}
                                    onPress={() => handleTagPress(keyword)}
                                    selected={selectedKeywords.includes(keyword)}
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
