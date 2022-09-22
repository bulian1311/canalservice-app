import React from 'react';
import { Text } from 'react-native';
import { styles } from './headline.styles';

export const Headline = ({ children, primary = false, ...props }) => {
  return (
    <Text
      style={[styles.headline, primary ? styles.primary : styles.dark]}
      {...props}
    >
      {children}
    </Text>
  );
};
