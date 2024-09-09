import React, {useState} from 'react';
import {Arrow, Warn} from '../../assets';
import styled from 'styled-components/native';
import {color, Font} from '../../styles';
import {Button, Input, TopBar} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Dimensions} from 'react-native';

function Name() {
  const [visibleModal, setVisibleModal] = useState<boolean>();
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <>
      <Input autoFocus title="이름" placeholder="실명 입력" />
      {visibleModal && (
        <ModalScreen width={screenWidth} height={screenHeight}>
          <Modal>
            <WarnTextBox>
              <Warn size={36} />
              <TextBox>
                <Font text="실명으로 입력하셨나요?" kind="semi24" />
                <Font
                  text={`입력한 내용은 나중에 수정할 수 없습니다.\n 내용이 맞는지 다시 확인해주세요.`}
                  kind="medium16"
                  color="gray500"
                  style={{textAlign: 'center'}}
                />
              </TextBox>
            </WarnTextBox>
            <TextBox>
              <Button onPress={() => setVisibleModal(false)} text="취소" />
              <Button
                onPress={() => {
                  navigation.navigate('School');
                  setVisibleModal(false);
                }}
                silverButton
                text="확인"
              />
            </TextBox>
          </Modal>
        </ModalScreen>
      )}
    </>
  );
}

export default Name;

const Container = styled.View`
  flex: 1;
  padding: 80px 20px 24px;
  background-color: ${color.white};
  justify-content: space-between;
`;

const ModalScreen = styled.View<{width: number; height: number}>`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  flex: 1;
  top: 0;
  left: 0;
  justify-content: flex-end;
`;

const Modal = styled.View`
  background-color: ${color.white};
  width: 100%;
  gap: 24px;
  padding: 24px 20px 69px;
  border-radius: 24px 24px 0 0;
`;

const WarnTextBox = styled.View`
  gap: 24px;
  width: 100%;
  align-items: center;
  padding: 16px 0;
`;

const TextBox = styled.View`
  align-items: center;
  gap: 8px;
  width: 100%;
`;
