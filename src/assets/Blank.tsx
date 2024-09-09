import styled from 'styled-components/native';

interface PropsType {
  size?: number;
}

export const Blank = ({size = 24}: PropsType) => {
  return <Box size={size}></Box>;
};

const Box = styled.View<{size: number}>`
  height: ${({size}) => size}px;
  width: ${({size}) => size}px;
`;
