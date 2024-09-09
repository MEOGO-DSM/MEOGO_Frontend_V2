import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ViewStyle, TouchableOpacity} from 'react-native';

interface PropsType {
  size?: number;
  onPress?: () => void;
  color?: string;
  rotate?: 'top' | 'left' | 'right' | 'bottom';
}

const rotationAngles: {[key: string]: string} = {
  right: '180deg',
  top: '90deg',
  bottom: '-90deg',
  left: '0deg',
};

export const Arrow = ({
  size = 24,
  onPress,
  color = '#000',
  rotate = 'left',
}: PropsType) => {
  const rotation = rotationAngles[rotate] || rotationAngles['left'];

  return (
    <Svg
      onPress={onPress}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      style={{transform: [{rotate: rotation}]}}>
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
