import React from 'react';
import {Text, TextStyle} from 'react-native';
import {color} from './color';

interface FontPropsType {
  text?: string;
  kind?: keyof typeof fonts;
  color?: keyof typeof color;
  style?: TextStyle;
}

export const Font = ({
  text,
  kind = '',
  color: textColor = 'black',
  style,
}: FontPropsType) => {
  const textColorStyle = textColor ? {color: color[textColor]} : {};
  return (
    <Text style={{...fonts[kind], ...textColorStyle, ...style}}>{text}</Text>
  );
};

const fonts: {[key: string]: TextStyle} = {
  '': {},
  semi40: {
    fontSize: 40,
    lineHeight: 52,
    fontWeight: '600',
  },
  semi36: {
    fontSize: 36,
    lineHeight: 48,
    fontWeight: '600',
  },
  semi32: {
    fontSize: 32,
    lineHeight: 44,
    fontWeight: '600',
  },
  bold24: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '700',
  },
  semi24: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '600',
  },
  medium24: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '500',
  },
  bold20: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '700',
  },
  semi20: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600'
  },
  medium20: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
  },
  bold18: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '700',
  },
  semi18: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
  },
  medium18: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '500',
  },
  regular18: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '400',
  },
  medium16: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
  },
  regular16: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
  },
  semi14: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '600',
  },
  medium14: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
  },
  regular14: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
  },
  semi12: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '600',
  },
  medium12: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
  },
  regular12: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
  },
};
