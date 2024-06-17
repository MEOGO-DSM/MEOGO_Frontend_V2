import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Animated, Easing} from 'react-native';
import {color} from '../styles/color';

type Props = {
  onPress: () => void;
  isOn: boolean;
};

const ToggleButton = ({onPress, isOn}: Props) => {
  const [animatedValue] = useState(new Animated.Value(isOn ? 1 : 0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [isOn, animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 17],
  });

  const colors = isOn ? color.amber500 : color.gray200;

  return (
    <ToggleContainer onPress={onPress} color={colors}>
      <ToggleWheel
        style={{
          transform: [{translateX}],
        }}
      />
    </ToggleContainer>
  );
};

export default ToggleButton;

const ToggleContainer = styled.TouchableOpacity<{color: string}>`
  width: 36px;
  height: 20px;
  border-radius: 10px;
  justify-content: center;
  background-color: ${props => props.color};
`;

const ToggleWheel = styled(Animated.View)`
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 99px;
`;
