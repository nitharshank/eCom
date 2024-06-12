import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigator/MainNavigator';
import LoginProvider from './src/provider/LoginProvider';
import LoderProvider from './src/provider/LoaderProvider';

export default function App() {

  return (
    <LoginProvider>
      <LoderProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </LoderProvider>
    </LoginProvider>
  );
}