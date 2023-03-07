import React from 'react';
import { Text, TextStyle } from 'react-native';
import { FontSizes, FontsFamily } from '../Fonts';
import { Colors } from '../Colors';

interface TextProps extends Omit<TextStyle, 'fontFamiy' | 'fontSize' > {
    children?: React.ReactNode
    fontFamily?: keyof typeof FontsFamily
    fontSize?: keyof typeof FontSizes
    color?: keyof typeof Colors

}
export const DefaultText = ({
  fontFamily = 'OpenSans', fontSize = 'md', color = 'black', children,
}:TextProps) => (
  <Text style={{
    fontFamily: FontsFamily[fontFamily],
    fontSize: FontSizes[fontSize],
    color: Colors[color],
  }}
  >
    {children}
  </Text>
);
