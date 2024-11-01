import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Font, color} from '../styles';
import {Arrow} from '../assets';

interface DropdownProps {
  width: string;
  defaultValue: string;
  onSelect: (value: string) => void;
  items: string[];
}

export const Dropdown = ({ width = '30%', defaultValue, onSelect, items }: DropdownProps) => {
  const [value, setValue] = useState<string>(defaultValue || '');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropdownClick = (item: string) => {
    setValue(item);
    setIsOpen(false);
    onSelect(item);
  };

  return (
    <DropdownWrapper width={width}>
      <DropdownContainer onPress={() => setIsOpen(!isOpen)}>
        <Font text={value || defaultValue} kind="medium14" color="gray800" />
        <Arrow
          color={color.gray400}
          size={14}
          rotate={isOpen ? 'top' : 'bottom'}
        />
      </DropdownContainer>
      {isOpen && (
        <DropdownList>
          {items.map((item, index) => (
            <DropdownItem key={index} onPress={() => handleDropdownClick(item)}>
              <Font text={item} kind="medium14" color="gray800" />
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.View<{width : string}>`
  position: relative;
  width: ${({ width }) => width};
  z-index: 10;
`;

const DropdownList = styled.ScrollView`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  background-color: ${color.white};
  border: 1px solid ${color.gray300};
  border-radius: 6px;
  max-height: 200px;
  flex-direction: column;
  z-index: 100;
`;
const DropdownContainer = styled.TouchableOpacity`
  border-radius: 6px;
  padding: 10px 12px;
  background-color: ${color.gray100};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const DropdownItem = styled.TouchableOpacity`
  padding: 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray200};
  background-color: ${color.white};
`;
