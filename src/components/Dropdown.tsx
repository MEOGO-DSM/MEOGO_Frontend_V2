import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Font, color} from '../styles';
import {Arrow} from '../assets';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

interface DropdownProps {
  defaultValue: string;
  onSelect: (value: string) => void;
  items: string[];
}

export const Dropdown = ({defaultValue, onSelect, items}: DropdownProps) => {
  const [value, setValue] = useState<string>(defaultValue || '');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleDropdownClick = (item: string) => {
    setValue(item);
    setIsOpen(false);
    onSelect(item);
  };

  return (
    <DropdownWrapper>
      <DropdownContainer onPress={() => setIsOpen(!isOpen)}>
        <Font text={value || defaultValue} kind="medium14" color="gray800" />
        <Arrow
          color={`${color.gray400}`}
          size={14}
          rotate={isOpen ? 'top' : 'bottom'}
        />
      </DropdownContainer>
      {isOpen && (
        <DropdownList
          data={items}
          keyExtractor={(item: any) => item}
          renderItem={({item}: any) => (
            <DropdownItem onPress={() => handleDropdownClick(item)}>
              <Font text={item} kind="medium14" color="gray800" />
            </DropdownItem>
          )}
        />
      )}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.View`
  /* position: relative;
  width: 100px;
  height: 300px;
  z-index: 100; */
`;

const DropdownList = styled.FlatList`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  background-color: ${color.white};
  border: 1px solid ${color.gray300};
  border-radius: 6px;
  max-height: 200px;
  z-index: 100;
`;

const DropdownItem = styled.TouchableOpacity`
  padding: 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray100};
  background-color: ${color.white};
  min-height: 40px;
`;
const DropdownContainer = styled.TouchableOpacity`
  border-radius: 6px;
  padding: 10px 12px;
  background-color: ${color.gray100};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
`;
