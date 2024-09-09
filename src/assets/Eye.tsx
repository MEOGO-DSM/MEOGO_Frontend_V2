import Svg, {Path} from 'react-native-svg';

interface PropsType {
  size?: number;
  onPress?: () => void;
}

export const Eye = ({size = 24, onPress}: PropsType) => {
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
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <Path
        stroke="#A1A1AA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.458 12C3.733 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.275 4.057-5.065 7-9.542 7-4.478 0-8.268-2.943-9.543-7Z"
      />
    </Svg>
  );
};
