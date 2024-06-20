import React from 'react';
import styled from 'styled-components/native';
import {Font} from '../styles/font';
import {Blank} from '../assets';
import {Dimensions} from 'react-native';

interface PropsType {
  leftIcon?: React.ReactNode;
  text?: string;
  rightIcon?: React.ReactNode;
  padding?: number
}

const screenWidth = Dimensions.get('window').width;

function TopBar({text = '', leftIcon, rightIcon = <Blank />, padding = 20}: PropsType) {
  return (
    <Container padding={padding} size={screenWidth}>
      {leftIcon}
      <Font text={text} kind="medium18" color="black" />
      {rightIcon}
    </Container>
  );
}

export default TopBar;

const Container = styled.View<{size: number, padding?:number}>`
  width: ${({size}) => size}px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: ${({padding}) => padding}px 20px;
  flex-direction: row;
  background-color: white;
  z-index: 1000;
`;
