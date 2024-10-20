import Svg, {Path} from 'react-native-svg';
import {SvgPropsType} from '../interfaces';

export const Search = ({size = 24, color = 'black', onPress}: SvgPropsType) => {
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
        d="m20 20-4.294-4.294m-4.849 2.008a6.857 6.857 0 1 1 0-13.714 6.857 6.857 0 0 1 0 13.714Z"
      />
    </Svg>
  );
};
