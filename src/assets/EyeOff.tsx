import Svg, {Path} from 'react-native-svg';

interface PropsType {
  size?: number;
  onPress?: () => void;
}

export const EyeOff = ({size = 24, onPress}: PropsType) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
      onPress={onPress}
      viewBox="0 0 24 24">
      <Path
        stroke="#A1A1AA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m3 3 3.59 3.59M21 21l-3.589-3.589m-3.536 1.414A10.05 10.05 0 0 1 12 19c-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 0 1 4.02 8.971m5.858.908a3 3 0 1 1 4.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88 6.59 6.59m7.532 7.532L6.59 6.59m7.532 7.532 3.29 3.29M6.59 6.59A9.953 9.953 0 0 1 12 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 0 1-4.132 5.411"
      />
    </Svg>
  );
};
