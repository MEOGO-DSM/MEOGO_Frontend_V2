import Svg, {Path} from 'react-native-svg';
import {SvgPropsType} from '../interfaces';

interface PropsType extends SvgPropsType {
  fill?: string;
}

export const Home = ({
  size = 24,
  color = 'black',
  fill = '#fff',
  onPress,
}: PropsType) => {
  return (
    <Svg
      onPress={onPress}
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 33 32">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M27.5 22.667V15.27c0-.713 0-1.07-.087-1.4a2.664 2.664 0 0 0-.374-.824c-.192-.283-.46-.518-.996-.988l-6.4-5.6c-.995-.87-1.493-1.306-2.053-1.472a2.67 2.67 0 0 0-1.514 0c-.56.166-1.056.6-2.05 1.47l-6.402 5.602c-.537.47-.804.705-.997.988-.17.251-.297.53-.374.823-.087.332-.087.688-.087 1.4v7.398c0 1.242 0 1.863.203 2.353.271.654.79 1.174 1.443 1.444.49.203 1.112.203 2.354.203 1.243 0 1.865 0 2.355-.203a2.667 2.667 0 0 0 1.442-1.443c.203-.49.204-1.112.204-2.354v-1.334a2.667 2.667 0 0 1 5.333 0v1.334c0 1.242 0 1.863.203 2.354.27.653.79 1.173 1.443 1.443.49.203 1.111.203 2.354.203 1.242 0 1.864 0 2.354-.203a2.667 2.667 0 0 0 1.443-1.444c.203-.49.203-1.11.203-2.353Z"
      />
    </Svg>
  );
};
