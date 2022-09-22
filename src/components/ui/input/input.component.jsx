import React from 'react';
import { TextInput, View, useWindowDimensions } from 'react-native';
import { Headline } from '../headline';
import { Spacer } from '../spacer';
import { styles } from './input.styles';

export const Input = ({ label, onChangeText, value, ...props }) => {
  const { width } = useWindowDimensions();
  const bigWidth = width > 600;

  return (
    <View style={bigWidth && styles.bigWrapper}>
      {label && (
        <>
          <Headline>{label}</Headline>
          <Spacer size={12} />
        </>
      )}

      <TextInput
        style={[styles.input, bigWidth && styles.bigInput]}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
    </View>
  );
};
