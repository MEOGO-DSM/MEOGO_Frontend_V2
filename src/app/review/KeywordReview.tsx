import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TopBar} from '../../components/TopBar';
import {TouchableOpacity} from 'react-native';
import {color} from '../../styles/color';
import {Font} from '../../styles/font';
import Tag from '../../components/Review/Tag';
import {Arrow} from '../../assets/Arrow';
import {useNavigation} from '@react-navigation/native';
import {reviewKeywordValue} from '../dummy/reviewKeywordValue';
import {StackNavigationProp} from '@react-navigation/stack';

export default function KeywordReview() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [selectedValue, setSelectedValue] = useState<string[]>([]);

  const handleTagPress = (tag: string) => {
    console.log('Tag pressed:', tag);
    setSelectedValue(prevState => {
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

  return (
    <Container>
      <TopBar
        text="키워드 리뷰"
        leftIcon={<Arrow onPress={() => navigation.navigate('ReviewWrite')} />}
        rightIcon={
          <TouchableOpacity onPress={() => navigation.navigate('Review')}>
            <Font
              text="등록"
              kind="semi18"
              color={selectedValue.length === 0 ? 'gray400' : 'amber700'}
            />
          </TouchableOpacity>
        }
      />
      <Content>
        <TitleWrap>
          <Font text="어떤 점이 좋은가요?" kind="semi24" />
          <Font
            text="이 학교에 어울리는 키워드를 1~5개골라주세요."
            kind="medium16"
            color="gray500"
          />
        </TitleWrap>

        {reviewKeywordValue.map((section, index) => (
          <KeyWordSectionBox key={index}>
            <Font text={section.title} kind="semi18" />
            <TagWrap>
              {section.content.map((tag, index) => (
                <Tag
                  key={index}
                  text={tag}
                  onPress={() => handleTagPress(tag)}
                  selected={selectedValue.includes(tag)}
                />
              ))}
            </TagWrap>
          </KeyWordSectionBox>
        ))}
      </Content>
    </Container>
  );
}

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
