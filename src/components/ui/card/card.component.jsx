import React from 'react';
import { View } from 'react-native';
import { styles } from './card.styles';

export const Card = ({ children, style, ...props }) => {
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};
