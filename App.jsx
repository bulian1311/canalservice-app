import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation';
import { AuthProvider } from './src/context';

export default function App() {
  const [auth, setAuth] = useState(false);

  return (
    <AuthProvider value={{ auth, setAuth }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <StackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
