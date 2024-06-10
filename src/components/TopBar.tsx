import React from 'react';
import styled from 'styled-components/native';
import {Font} from '../styles/font';
import {Arrow_Left, Blank} from '../assets';
import {Dimensions} from 'react-native';

interface PropsType {
  leftIcon?: React.ReactNode;
  text?: string;
  rightIcon?: React.ReactNode;
}

const screenWidth = Dimensions.get('window').width;

function TopBar({text = '', leftIcon, rightIcon = <Blank />}: PropsType) {
  return (
    <Container size={screenWidth}>
      {leftIcon}
      <Font text={text} kind="medium18" />
      {rightIcon}
    </Container>
  );
}

export default TopBar;

const Container = styled.View<{size: number}>`
  width: ${({size}) => size}px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 16px;
  flex-direction: row;
  background-color: white;
`;
