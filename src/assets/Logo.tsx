import Svg, {Path, Rect} from 'react-native-svg';
import {SvgPropsType} from '../interfaces';

export const Logo = ({size = 64}: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 65 65">
      <Rect
        width="10.667"
        height="10.667"
        x="10.1"
        y="21.3"
        stroke="#000"
        strokeWidth="6.4"
        rx="4.267"
      />
      <Path
        stroke="#FFC107"
        strokeLinecap="round"
        strokeWidth="6.4"
        d="M42.633 21.3h6.4a4.267 4.267 0 0 1 4.267 4.267v6.4"
      />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="6.4"
        d="M22.367 43.167h10.4m10.4 0h-10.4m0 0V33.033"
      />
    </Svg>
  );
};
