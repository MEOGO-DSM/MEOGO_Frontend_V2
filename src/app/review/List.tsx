import React, {useState} from 'react';
import styled from 'styled-components/native';
import {color, Font} from '@/styles';
import Review from './Review';
import Qanda from './Qanda';
import SchoolInfo from './SchoolInfo';
import Photo from './Photo';
import {View} from 'react-native';

const selectValue = [
  {name: '리뷰', component: Review},
  {name: 'Q&A', component: Qanda},
  {name: '학교 정보', component: SchoolInfo},
  {name: '사진', component: Photo},
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

      <View>{renderSelectedComponent()}</View>
    </>
  );
}

const ListContainer = styled.View`
  background-color: ${color.white};
  flex-direction: row;
  justify-content: space-around;
`;

const SelectBox = styled.TouchableOpacity<{isSelected: boolean}>`
  border-bottom-width: ${props => (props.isSelected ? '2px' : '0')};
  border-bottom-color: ${color.black};
  padding: 16px 8px;
`;
