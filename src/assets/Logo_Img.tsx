import Svg, {Path, Rect} from 'react-native-svg';

interface PropsType {
  size?: number;
}

export const Logo_Img = ({size = 28}: PropsType) => {
  return (
    <Svg width={size} height={size} fill="none" viewBox="0 0 29 29">
      <Rect
        width="4.667"
        height="4.667"
        x="4.551"
        y="9.512"
        stroke="#E4E4E7"
        strokeWidth="2.8"
        rx="1.867"
      />
      <Path
        stroke="#E4E4E7"
        strokeLinecap="round"
        strokeWidth="2.8"
        d="M18.783 9.512h2.8c1.031 0 1.867.835 1.867 1.866v2.8m-13.532 4.9h4.55m4.55 0h-4.55m0 0v-4.433"
      />
    </Svg>
  );
};
