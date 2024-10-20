import Svg, {Path} from 'react-native-svg';
import {SvgPropsType} from '../interfaces';

export const Plus = ({color = 'black', size = 24, onPress}: SvgPropsType) => {
  return (
    <Svg
      onPress={onPress}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 12h6m0 0h6m-6 0v6m0-6V6"
      />
    </Svg>
  );
};
