import Svg, {Path} from 'react-native-svg';
import {SvgPropsType} from '../interfaces';

export const Filter = ({size = 24, color = 'black', onPress}: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 15h7M3 15h2m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Zm15-6h1M3 9h7m6.5 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      />
    </Svg>
  );
};
