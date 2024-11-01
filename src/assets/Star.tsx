import React from 'react';
import Svg, {Path} from 'react-native-svg';
import styled from 'styled-components/native';
import {SvgPropsType} from '../interfaces';

interface PropsType extends SvgPropsType {
  full?: boolean;
  onPressIn?: () => void;
  onPressOut?: () => void;
}

export const Star = ({
  size = 24,
  full,
  onPress,
  onPressIn,
  onPressOut,
}: PropsType) => {
  return (
    <StarContainer
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}>
      {full ? (
        <Svg width={size} height={size} fill="none" viewBox="0 0 14 14">
          <Path
            fill="#FFC107"
            stroke="#FFC107"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1.362 6.03a.292.292 0 0 1 .164-.504l3.502-.415a.292.292 0 0 0 .23-.168l1.478-3.202a.292.292 0 0 1 .53 0l1.477 3.202a.29.29 0 0 0 .23.168l3.502.415c.247.03.346.335.163.504L10.05 8.424a.291.291 0 0 0-.088.271l.687 3.46a.292.292 0 0 1-.429.311l-3.077-1.723a.29.29 0 0 0-.285 0l-3.077 1.723a.292.292 0 0 1-.43-.312l.688-3.458a.292.292 0 0 0-.088-.272L1.362 6.03Z"
          />
        </Svg>
      ) : (
        <Svg width={size} height={size} fill="none" viewBox="0 0 14 14">
          <Path
            stroke="#D4D4D8"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1.362 6.03a.292.292 0 0 1 .164-.504l3.502-.415a.292.292 0 0 0 .23-.168l1.478-3.202a.292.292 0 0 1 .53 0l1.477 3.202a.29.29 0 0 0 .23.168l3.502.415c.247.03.346.335.163.504L10.05 8.424a.291.291 0 0 0-.088.271l.687 3.46a.292.292 0 0 1-.429.311l-3.077-1.723a.29.29 0 0 0-.285 0l-3.077 1.723a.292.292 0 0 1-.43-.312l.688-3.458a.292.292 0 0 0-.088-.272L1.362 6.03Z"
          />
        </Svg>
      )}
    </StarContainer>
  );
};

const StarContainer = styled.TouchableOpacity``;
