import React from 'react';
import styled from 'styled-components/native';
import { color } from '../../styles';
import { QuestionBox } from '../../components/Review/QuestionBox';
import FilterTag from '../../components/Review/FilterTag';

export default function QAndA() {

  return (
    <Container>
      <FilterTag />
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

