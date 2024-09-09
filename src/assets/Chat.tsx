import Svg, {Path} from 'react-native-svg';

interface PropsType {
  size?: number;
  color?: string;
  fill?: string;
  onPress?: () => void;
}

export const Chat = ({
  size = 24,
  color = '#000',
  fill = '#fff',
  onPress,
}: PropsType) => {
  return (
    <Svg
      width={size}
      height={size}
      onPress={onPress}
      fill="none"
      viewBox="0 0 33 32">
      <Path fill="#fff" d="M.5 0h32v32H.5z" />
      <Path
        fill={fill}
        d="M8.22 20.093a7.963 7.963 0 0 0 4.73 1.228 8 8 0 1 0-7.21-3.708l-.566 1.696v.003c-.217.65-.325.974-.248 1.19a.668.668 0 0 0 .405.405c.215.077.538-.03 1.183-.246l.01-.003 1.696-.565Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.95 21.32a8 8 0 1 0-7.21-3.707l-.566 1.696v.003c-.217.65-.325.974-.248 1.19a.668.668 0 0 0 .405.405c.215.077.538-.03 1.183-.246l.01-.003 1.696-.565a7.963 7.963 0 0 0 4.73 1.228Zm0 0a8.003 8.003 0 0 0 11.83 4.106l1.696.566h.003c.65.217.975.325 1.192.248a.666.666 0 0 0 .403-.404c.077-.216-.031-.542-.248-1.193l-.566-1.696.19-.314a7.963 7.963 0 0 0 1.05-3.966 8 8 0 0 0-8-8l-.3.005-.15.008"
      />
    </Svg>
  );
};
