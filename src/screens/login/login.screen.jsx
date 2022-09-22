import React from 'react';
import { useWindowDimensions, ScrollView } from 'react-native';
import { Layout } from '../../layout';
import { LoginForm } from '../../components';
import { styles } from './login.styles';

export const LoginScreen = () => {
  const { width } = useWindowDimensions();
  const bigWidth = width > 600;

  return (
    <Layout style={[bigWidth && styles.bigWidth]}>
      <LoginForm />
    </Layout>
  );
};
