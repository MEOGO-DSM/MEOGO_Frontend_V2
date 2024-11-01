import {Svg, Path} from 'react-native-svg';
import {SvgPropsType} from '../interfaces';

export const Warn = ({size = 24}: SvgPropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 37 36">
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M18.5 12.675v6m0 12.825C11.044 31.5 5 25.456 5 18S11.044 4.5 18.5 4.5 32 10.544 32 18s-6.044 13.5-13.5 13.5Zm.075-8.325v.15h-.15v-.15h.15Z"
      />
    </Svg>
  );
};
