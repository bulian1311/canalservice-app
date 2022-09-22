import React from 'react';
import { Platform, SafeAreaView, View } from 'react-native';
import { Header } from './header';
import { styles } from './layout.styles';

const android = Platform.OS === 'android';

export const Layout = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.fullHeight, android && styles.android]}>
      <Header />
      <View style={[styles.layout, styles.fullHeight, style]}>{children}</View>
    </SafeAreaView>
  );
};
