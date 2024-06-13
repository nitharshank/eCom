import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigator/MainNavigator';
import LoginProvider from './src/provider/LoginProvider';
import LoderProvider from './src/provider/LoaderProvider';
import Loader from './src/components/loaders';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

export default function App() {

  return (
    <Provider store = {Store}>
      <LoginProvider>
        <LoderProvider>
          <NavigationContainer>
            <MainNavigator />
            <Loader />
          </NavigationContainer>
        </LoderProvider>
      </LoginProvider>
    </Provider>
  );
}