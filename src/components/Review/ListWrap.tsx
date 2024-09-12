import React, {useState} from 'react';
import styled from 'styled-components/native';
import {color} from '../../styles/color';
import {Font} from '../../styles/font';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ReviewWrap from '../../app/review/ReviewWrap';
import Qanda from '../../app/review/Qanda';
import SchoolInfo from '../../app/review/SchoolInfo';
import PhotoWrap from '../../app/review/PhotoWrap';

const selectValue = [
  {name: '리뷰', component: ReviewWrap},
  {name: 'Q&A', component: Qanda},
  {name: '학교 정보', component: SchoolInfo},
  {name: '사진', component: PhotoWrap},
];

export default function ListWrap() {
  const [selectedListValue, setSelectedListValue] = useState<number>(0);
  const Tab = createMaterialTopTabNavigator();

  return (
    <Container>
      {selectValue.map((value, index) => (
        <SelectBox
          key={index}
          onPress={() => setSelectedListValue(index)}
          isSelected={selectedListValue === index}>
          <Font
            text={value.name}
            kind="semi18"
            color={selectedListValue === index ? 'black' : 'gray500'}
          />
        </SelectBox>
      ))}
    </Container>
  );
}

const Container = styled.View`
  background-color: ${color.white};
  flex-direction: row;
  justify-content: space-around;
`;

const SelectBox = styled.TouchableOpacity<{isSelected: boolean}>`
  border-bottom-width: ${props => (props.isSelected ? '2px' : '0')};
  border-bottom-color: ${color.black};
  padding: 16px 8px;
`;
