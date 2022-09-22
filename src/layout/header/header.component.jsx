import React from 'react';
import { View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './header.styles';
import { useAuth } from '../../hooks';
import { LogoIcon, LogoutIcon, LogoFullIcon } from '../../icons';

export const Header = () => {
  const { auth, setAuth } = useAuth();
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const bigWidth = width > 600;

  const logout = () => {
    setAuth(false);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.header}>
      {bigWidth ? <LogoFullIcon /> : <LogoIcon />}

      {auth && (
        <TouchableOpacity onPress={logout}>
          <LogoutIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};
