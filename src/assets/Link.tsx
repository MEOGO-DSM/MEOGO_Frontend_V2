import Svg, {Path} from 'react-native-svg';
import {SvgPropsType} from '../interfaces';

export const Link = ({size = 24, color = 'black', onPress}: SvgPropsType) => {
  return (
    <Svg
      width={size}
      height={size}
      onPress={onPress}
      fill="none"
      viewBox="0 0 25 24">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m12.75 11.5-5-5m0 0-5 5m5-5v7.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.803"
      />
    </Svg>
  );
};
