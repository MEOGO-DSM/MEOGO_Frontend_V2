import styled from 'styled-components/native';
import {SvgPropsType} from '../interfaces';

export const Blank = ({size = 24}: SvgPropsType) => {
  return <Box size={size}></Box>;
};

const Box = styled.View<{size: number}>`
  height: ${({size}) => size}px;
  width: ${({size}) => size}px;
`;
