import React from 'react';
import styled from 'styled-components/native';
import {color, Font} from '@/styles';
import {Arrow, Logo_Img} from '../../assets';

interface ListPropsType {
  img?: string;
  name?: string;
  location?: string;
  onPress?: () => void;
}

function SchoolList({img, name, location, onPress}: ListPropsType) {
  return (
    <Container onPress={onPress}>
      <SchoolImg>{img ? <></> : <Logo_Img />}</SchoolImg>
      <InfoBox>
        <Font text={name} kind="semi18" color="black" />
        <Font text={location} kind="regular14" color="gray500" />
      </InfoBox>
      <Arrow rotate="right" color={color.gray300} />
    </Container>
  );
}

export default SchoolList;

const Container = styled.TouchableOpacity`
  padding: 20px 0;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray100};
`;

const SchoolImg = styled.View`
  border: 1px solid ${color.gray100};
  background-color: ${color.gray50};
  border-radius: 8px;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
`;

const InfoBox = styled.View`
  gap: 2px;
  flex: 1;
`;
