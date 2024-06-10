import Svg, {Path} from 'react-native-svg';
import {ViewStyle} from 'react-native';

interface PropsType {
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

export const Arrow_Right = ({
  size = 24,
  color = '#000',
  onPress,
  style,
}: PropsType) => {
  return (
    <Svg
      width={size}
      height={size}
      onPress={onPress}
      fill="none"
      viewBox="0 0 24 24"
      style={style}>
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m9 5 7 7-7 7"
      />
    </Svg>
  );
};
