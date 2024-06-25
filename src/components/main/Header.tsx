import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {color} from '../../styles/color';
import {Logo, Search, Bell} from '../../assets';

function Header() {
  const screenWidth = Dimensions.get('window').width;
  return (
    <Container width={screenWidth}>
      <IconBox>
        <Bell />
      </IconBox>
      <Logo size={40} />
      <IconBox>
        <Search />
      </IconBox>
    </Container>
  );
}

export default Header;

const Container = styled.View<{width: number}>`
  width: ${({width}) => width}px;
  background-color: white;
  position: absolute;
  top: 0;
  z-index: 10000;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray200};
`;

const IconBox = styled.TouchableOpacity`
  padding: 8px;
`;
