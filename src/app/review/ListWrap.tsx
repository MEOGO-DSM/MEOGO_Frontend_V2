import React, { useState } from 'react';
import styled from 'styled-components/native';
import { color } from '../../styles/color';
import { Font } from '../../styles/font';
import ReviewWrap from './ReviewWrap';
import QandA from './QandA';
import SchoolInfo from './SchoolInfo';
import PhotoWrap from './PhotoWrap';
import { View } from 'react-native';

const selectValue = [
  { name: '리뷰', component: ReviewWrap },
  { name: 'Q&A', component: QandA },
  { name: '학교 정보', component: SchoolInfo },
  { name: '사진', component: PhotoWrap },
];

export default function ListWrap() {
  const [selectedListValue, setSelectedListValue] = useState<number>(0);

  const renderSelectedComponent = () => {
    const SelectedComponent = selectValue[selectedListValue].component;
    return <SelectedComponent />;
  };

  return (
    <>
      <ListContainer>
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
      </ListContainer>

      <View>
        {renderSelectedComponent()}
      </View>
    </>
  );
}

const ListContainer = styled.View`
  background-color: ${color.white};
  flex-direction: row;
  justify-content: space-around;
`;

const SelectBox = styled.TouchableOpacity<{ isSelected: boolean }>`
  border-bottom-width: ${props => (props.isSelected ? '2px' : '0')};
  border-bottom-color: ${color.black};
  padding: 16px 8px;
`;
