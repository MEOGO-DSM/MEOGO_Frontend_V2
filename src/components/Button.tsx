import React from 'react';
import styled from 'styled-components/native';
import {color} from '../styles/color';
import {Font} from '../styles/font';

interface ButtonPropsType {
  text?: string;
  onPress?: () => void;
  silverButton?: boolean;
}

export function Button({text, onPress, silverButton}: ButtonPropsType) {
  return (
    <PrimaryButton silver={silverButton} onPress={onPress}>
      <Font
        kind="medium16"
        text={text}
        color={silverButton ? 'black' : 'white'}
      />
    </PrimaryButton>
  );
}

const PrimaryButton = styled.TouchableOpacity<{silver?: boolean}>`
  width: 100%;
  border-radius: 8px;
  background-color: ${({silver}) => (silver ? color.gray100 : color.gray800)};
  padding: 16px 0;
  justify-content: center;
  align-items: center;
`;
