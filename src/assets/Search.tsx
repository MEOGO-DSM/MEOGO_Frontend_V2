import Svg, {Path} from 'react-native-svg';

interface PropsType {
  size?: number;
  color?: string;
  onPress?: () => void;
}

export const Search = ({size = 24, color = '#000', onPress}: PropsType) => {
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
