import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Font} from '../styles/font';
import {color} from '../styles/color';
import {Eye, EyeOff} from '../assets';

interface InputPropsType {
  title?: string;
  placeholder?: string;
  errorMasage?: string;
  password?: boolean;
  icon?: React.ReactNode;
  autoFocus?: boolean;
  value?: string;
  onChange?: () => void;
  onChangeText?: () => void;
}

function Input({
  title,
  placeholder,
  errorMasage = '',
  password,
  icon,
  autoFocus,
  value,
  onChange,
  onChangeText,
}: InputPropsType) {
  const [press, setPress] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <Container>
      <TitleBox>
        <Font kind="medium14" text={title} />
      </TitleBox>
      <InputContainer focused={isFocused}>
        <InputBox
          onChange={onChange}
          onChangeText={onChangeText}
          value={value}
          autoFocus={autoFocus}
          secureTextEntry={password && !press}
          placeholder={placeholder}
          placeholderTextColor={color.gray400}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {password ? (
          <PwdButton onPress={() => setPress(!press)}>
            {press ? <EyeOff /> : <Eye />}
          </PwdButton>
        ) : (
          <ButtonBox>{icon}</ButtonBox>
        )}
      </InputContainer>

      <ErrorBox>
        <Font text={errorMasage} kind="medium14" color="red" />
      </ErrorBox>
    </Container>
  );
}

export default Input;

const Container = styled.View`
  width: 100%;
  gap: 6px;
`;

const TitleBox = styled.View`
  padding-left: 0px;
`;

const InputBox = styled.TextInput`
  font-size: 16px;
  font-weight: 500;
  flex: 1;
  padding: 8px 14px;
`;

const InputContainer = styled.TouchableOpacity<{focused: boolean}>`
  height: 48px;
  width: 100%;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  background-color: ${color.gray100};
  overflow: hidden;
  ${({focused}) =>
    focused &&
    `
    background-color: ${color.white};
    border: 1px solid ${color.black};
  `}
`;

const ErrorBox = styled.View`
  padding: 0 4px;
  height: 18px;
  width: 100%;
`;

const PwdButton = styled.TouchableOpacity`
  padding: 8px 14px;
`;

const ButtonBox = styled.View`
  padding: 8px 14px;
`;
