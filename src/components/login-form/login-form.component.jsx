import React, { useState } from 'react';
import { View, Alert, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks';
import { Headline, Input, Card, Button, Spacer } from '../ui';
import { styles } from './login-form.styles';
import { fakeAuth } from '../../api';

export const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();
  const navigation = useNavigation();
  const { width } = useWindowDimensions();
  const bigWidth = width > 600;

  const loginSubmit = () => {
    const isAuth = fakeAuth(login, password);

    if (!isAuth) {
      Alert.alert('Ошибка', 'Неверный логин или пароль.', [{ text: 'OK' }]);
      return;
    }

    setAuth(true);
    navigation.navigate('Content');

    setLogin('');
    setPassword('');
  };

  return (
    <Card style={[styles.form, bigWidth && styles.formBig]}>
      <View style={styles.title}>
        <Headline primary>Autorization</Headline>
      </View>

      <Spacer size={bigWidth ? 35 : 12} />
      <Input value={login} onChangeText={setLogin} label="login" />

      <Spacer size={bigWidth ? 25 : 12} />
      <Input value={password} onChangeText={setPassword} label="password" />

      <Spacer size={22} />
      <Button title="Submit" onPress={loginSubmit} />
    </Card>
  );
};
