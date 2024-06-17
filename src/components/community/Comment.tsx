import React from 'react';
import styled from 'styled-components/native';
import {Font} from '../../styles/font';
import {Menu} from '../../assets';
import {color} from '../../styles/color';

interface PropsType {
  userName?: string;
  date?: string;
  contents?: string;
}

function Comment({userName, date, contents}: PropsType) {
  return (
    <Container>
      <InfoBox>
        <Info>
          <Font text="익명" kind="semi14" />
          <Font text="02.19 23:46" kind="medium12" color="gray400" />
        </Info>
        <More>
          <Menu size={20} color={`${color.gray400}`} />
        </More>
      </InfoBox>
      <Font
        kind="regular14"
        text="오늘부로 임다영의 지지를 철회한다. 오늘부터 지지관계에서 벗어나 임다영과 나는"
      />
    </Container>
  );
}

export default Comment;

const Container = styled.View`
  width: 100%;
  gap: 8px;
  padding: 20px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${color.gray200};
`;

const InfoBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const More = styled.TouchableOpacity`
  padding: 4px;
`;
