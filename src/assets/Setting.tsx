import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgPropsType} from '../interfaces';

interface PropsType extends SvgPropsType {
  rotate?: 'vertical' | 'horizontal';
}

export const Setting = ({
  color = 'black',
  size = 24,
  onPress,
  rotate = 'vertical',
}: PropsType) => {
  const rotation = rotate === 'vertical' ? '0deg' : '90deg';

  return (
    <Svg
      onPress={onPress}
      width={size}
      height={size}
      fill={color}
      style={{transform: [{rotate: rotation}]}}
      viewBox="0 0 20 20">
      <Path
        fill={color}
        d="M10 5.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Zm0 5a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Zm0 5a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 5.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Zm0 5a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Zm0 5a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z"
      />
    </Svg>
  );
};
