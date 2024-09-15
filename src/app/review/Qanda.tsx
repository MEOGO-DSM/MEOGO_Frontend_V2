import React from 'react';
import styled from 'styled-components/native';
import { color } from '../../styles';
import { Filter } from '../../assets';
import { NewMarkTag } from '../../components/Review/NewMarkTag';
import { QuestionBox } from '../../components/Review/QuestionBox';

export default function QandA() {
  const tagList = ["학교생활질문", "그외", "입학관련질문"]
  return (
    <Container>
      <FilterWrap
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 16 }}
      >
        <Filter color={color.gray500} />
        <TagWrap>
          {tagList.map((value, index) => (
            <NewMarkTag key={index} text={value} mark={true} />
          ))}
        </TagWrap>
      </FilterWrap>
      <QuestionBox />
      <QuestionBox />
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  background-color: ${color.white};
  padding: 24px 0;
  gap: 16px;
`

const FilterWrap = styled.ScrollView`
flex-direction: row;
padding: 8px 0;
`

const TagWrap = styled.View`
display: flex;
flex-direction: row;
gap: 8px;
`