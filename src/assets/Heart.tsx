import Svg, {Path} from 'react-native-svg';
import {SvgPropsType} from '../interfaces';

interface PropsType extends SvgPropsType {
  fill?: string;
}

export const Heart = ({
  size = 24,
  color = 'black',
  fill = 'none',
  onPress,
}: PropsType) => {
  return (
    <Svg
      onPress={onPress}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20">
      <Path
        fill={fill}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6.412C8.333 2.5 2.5 2.917 2.5 7.917s7.5 9.166 7.5 9.166 7.5-4.166 7.5-9.166S11.667 2.5 10 6.412Z"
      />
    </Svg>
  );
};
