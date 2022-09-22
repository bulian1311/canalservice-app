import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './button.styles';

export const Button = ({ onPress, title = 'Submit' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
