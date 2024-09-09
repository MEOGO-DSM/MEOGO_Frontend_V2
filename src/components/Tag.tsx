import React from 'react';
import styled from 'styled-components/native';
import {color} from '../styles/color';
import {Font} from '../styles/font';

interface PropsType {
  text?: string;
  school?: boolean;
}

function Tag({text, school}: PropsType) {
  return (
    <TagBox bg={school}>
      <Font
        text={text}
        color={school ? 'amber900' : 'gray500'}
        kind="medium12"
      />
    </TagBox>
  );
}

export default Tag;

const TagBox = styled.View<{bg: any}>`
  border-radius: 8px;
  background-color: ${({bg}) => (bg ? color.amber50 : color.gray100)};
  padding: 4px 6px;
`;
