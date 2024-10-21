import React from 'react';
import styled from 'styled-components/native';
import {Star} from '../assets';
import {Font} from '../styles/font';

interface PropsType {
  num?: number;
  size?: number;
  isText?: boolean;
}

function StarRating({num = 0, size = 14, isText = true}: PropsType) {
  const stars: React.ReactNode[] = [];
  const floorNum = Math.floor(num);
  for (let i = 0; i < floorNum; i++) {
    stars.push(<Star key={`full-${i}`} size={size} full />);
  }

  for (let i = 0; i < 5 - floorNum; i++) {
    stars.push(<Star key={`empty-${i}`} size={size} />);
  }

  return (
    <StarContainer>
      <StarBox>{stars}</StarBox>
      {isText && <Font text={num.toFixed(1)} kind="medium12" color="gray600" />}
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
