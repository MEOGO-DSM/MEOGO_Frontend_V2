import React from 'react';
import styled from 'styled-components/native';
import {color, Font} from '@/styles';
import {Arrow} from '../../assets';

function EventCard() {
  return (
    <EventContainer>
      <EventBox>
        <EventText>
          <Font
            kind="medium14"
            color="gray400"
            text="후배를 위한 학교 정보 공유"
          />
          <Font kind="bold20" color="white" text="내 학교 리뷰 쓰러가기" />
        </EventText>
        <Arrow rotate="right" color={color.gray600} />
      </EventBox>
    </EventContainer>
  );
}

export default EventCard;

const EventContainer = styled.View`
  width: 100%;
  padding: 24px 20px;
`;

const EventBox = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 24px;
  border-radius: 12px;
  background-color: ${color.gray900};
  align-items: center;
`;

const EventText = styled.View`
  gap: 4px;
`;
