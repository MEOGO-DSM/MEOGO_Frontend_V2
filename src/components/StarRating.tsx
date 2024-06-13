import React from 'react';
import styled from 'styled-components/native';
import {Star} from '../assets';
import {Font} from '../styles/font';

interface PropsType {
  num: number;
}

function StarRating({num = 0}: PropsType) {
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < num; i++) {
    stars.push(<Star key={`full-${i}`} size={14} full />);
  }

  for (let i = 0; i < 5 - num; i++) {
    stars.push(<Star key={`empty-${i}`} size={14} />);
  }

  return (
    <StarContainer>
      <StarBox>{stars}</StarBox>
      <Font text={num.toFixed(1)} kind="medium12" color="gray600" />
    </StarContainer>
  );
}

export default StarRating;

const StarContainer = styled.View`
  gap: 4px;
  flex-direction: row;
  align-items: center;
`;

const StarBox = styled.View`
  gap: 2px;
  flex-direction: row;
  align-items: center;
`;
