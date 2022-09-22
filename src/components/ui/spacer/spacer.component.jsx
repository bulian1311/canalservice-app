import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Spacer = ({ size = 0, horizontal = false }) => {
  return (
    <View
      style={StyleSheet.create({
        marginTop: horizontal ? 0 : size,
        marginLeft: horizontal ? size : 0,
      })}
    />
  );
};
