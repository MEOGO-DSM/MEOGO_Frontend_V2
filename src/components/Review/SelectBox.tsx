import React from 'react';
import styled from 'styled-components/native';
import {color, Font} from '@/styles';
import {Arrow} from '../../assets/Arrow';

interface PropsType {
  text?: string;
}

export default function SelectBox({text}: PropsType) {
  return (
    <Container>
      <Font text={text} kind="medium14" color="gray800" />
      <Arrow size={14} color={color.gray400} rotate="bottom" />
    </Container>
  );
}

const Container = styled.View`
  padding: 10px 12px;
  gap: 8px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${color.gray100};
  border-radius: 6px;
`;
