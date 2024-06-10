import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ViewStyle} from 'react-native';

interface PropsType {
  size?: number;
  onPress?: () => void;
  style?: ViewStyle;
  color?: string;
}

export const Arrow_Left = ({
  size = 24,
  onPress,
  style,
  color = '#000',
}: PropsType) => {
  return (
    <Svg
      style={style}
      onPress={onPress}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15 19-7-7 7-7"
      />
    </Svg>
  );
};
