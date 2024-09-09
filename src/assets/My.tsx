import Svg, {Path} from 'react-native-svg';

interface PropsType {
  size?: number;
  color?: string;
  onPress?: () => void;
}

export const My = ({size = 24, color = '#000', onPress}: PropsType) => {
  return (
    <Svg
      onPress={onPress}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 33 32">
      <Path
        fill={color}
        d="M2.739 9.273h3.27l3.532 8.631h.141l3.533-8.63h3.27V22h-2.566v-8.332h-.106l-3.322 8.28H8.733L5.41 13.632h-.106V22H2.74V9.273Zm15.117 0h2.97l2.936 5.485h.123l2.918-5.485h2.97l-4.64 8.192V22h-2.636v-4.535l-4.641-8.192Z"
      />
    </Svg>
  );
};
