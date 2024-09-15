import Svg, { Path } from 'react-native-svg';

interface PropsType {
  size?: number;
  color?: string;
}

export const Media = ({ size=24, color='#000' }: PropsType) => {
  return (
    <Svg width={size} height={size} fill='none' viewBox="0 0 24 24" >
      <Path stroke="#D4D4D8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 18V6.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C4.52 3 5.08 3 6.2 3h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105v11.606c0 .485 0 .865-.018 1.174M3 18c0 .988.013 1.506.218 1.907.192.377.497.683.874.875.427.218.987.218 2.105.218h11.607c1.118 0 1.677 0 2.104-.218.376-.192.682-.498.874-.875.123-.242.177-.526.2-.93M3 18l4.768-5.563.001-.001c.423-.493.635-.74.886-.83a1 1 0 0 1 .681.005c.25.093.46.343.876.843l2.671 3.205c.386.464.58.696.816.79a1 1 0 0 0 .651.028c.244-.072.46-.287.889-.716l.497-.497c.437-.438.656-.656.904-.728a.995.995 0 0 1 .659.037c.238.099.431.34.818.822l2.865 3.582m0 0L21 19M15 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    </Svg >
  )
}