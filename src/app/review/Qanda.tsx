import React, { useState } from 'react';
import styled from 'styled-components/native';
import { color } from '../../styles';
import { Filter } from '../../assets';
import { NewMarkTag } from '../../components/Review/NewMarkTag';
import { QuestionBox } from '../../components/Review/QuestionBox';

export default function QandA() {
  const tagList = ["학교생활질문", "그외", "입학관련질문"]
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  return (
    <Container>
      <FilterWrap
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 16 }}
      >
        <FilterIcon>
          <Filter color={color.gray500} />
        </FilterIcon>
        <TagWrap>
          {tagList.map((value, index) => (
            <NewMarkTag
              key={index}
              onPress={() => setSelectedTag(value)}
              text={value}
              mark={true}
              selected={selectedTag === value}
            />
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

const FilterIcon = styled.View`
  margin-right: 16px;
`