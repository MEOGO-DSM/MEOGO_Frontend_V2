import Svg, {Path} from 'react-native-svg';

interface PropsType {
  size?: number;
  color?: string;
  onPress?: () => void;
  full?: boolean;
}

export const Bookmark = ({
  size = 24,
  color = '#fff',
  onPress,
  full,
}: PropsType) => {
  return (
    <Svg
      width={size}
      height={size}
      onPress={onPress}
      fill="none"
      viewBox="0 0 20 20">
      <Path
        fill={color}
        stroke="#3F3F46"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 6v7.905c0 1.134 0 1.7.17 2.048a1.666 1.666 0 0 0 1.716.918c.383-.05.855-.365 1.8-.994l.001-.002c.374-.25.561-.374.757-.443.36-.127.752-.127 1.111 0 .196.07.384.194.76.445.943.629 1.415.943 1.799.994.71.095 1.4-.275 1.716-.918.17-.347.17-.914.17-2.048V5.997c0-.931 0-1.398-.181-1.754a1.668 1.668 0 0 0-.73-.728c-.356-.182-.822-.182-1.755-.182H7.667c-.934 0-1.4 0-1.757.182-.314.16-.569.415-.728.728C5 4.6 5 5.067 5 6Z"
      />
    </Svg>
  );
};
