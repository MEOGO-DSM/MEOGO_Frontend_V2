import React from 'react';
import Svg, {Path} from 'react-native-svg';
import styled from 'styled-components/native';

interface PropsType {
  size?: number;
  color?: string;
  onPress?: () => void;
}

export const Close = ({size = 24, color = '#000', onPress}: PropsType) => {
  return (
    <StyledSvg
      width={size}
      height={size}
      onPress={onPress}
      fill="none"
      viewBox="0 0 24 24">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
      />
    </StyledSvg>
  );
};

const StyledSvg = styled(Svg)`
  z-index: 1;
`;

