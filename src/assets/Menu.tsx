import Svg, {Path} from 'react-native-svg';

interface PropsType {
  size?: number;
  color?: string;
  onPress?: () => void;
}

export const Menu = ({size = 24, color = '#000', onPress}: PropsType) => {
  return (
    <Svg
      onPress={onPress}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20">
      <Path
        fill={color}
        d="M14.167 10a.833.833 0 1 0 1.666 0 .833.833 0 0 0-1.666 0Zm-5 0a.833.833 0 1 0 1.666 0 .833.833 0 0 0-1.666 0Zm-5 0a.833.833 0 1 0 1.666 0 .833.833 0 0 0-1.666 0Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.167 10a.833.833 0 1 0 1.666 0 .833.833 0 0 0-1.666 0Zm-5 0a.833.833 0 1 0 1.666 0 .833.833 0 0 0-1.666 0Zm-5 0a.833.833 0 1 0 1.666 0 .833.833 0 0 0-1.666 0Z"
      />
    </Svg>
  );
};
