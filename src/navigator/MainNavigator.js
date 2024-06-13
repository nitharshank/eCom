import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login/login-screen';
import { useLogin } from '../provider/LoginProvider';
import BottomTabNavigator from '../navigator/BottomTabNavigator';

const Stack = createStackNavigator();


const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={LoginScreen} name={"LoginScreen"} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <BottomTabNavigator  /> : <StackNavigator />;
};

export default MainNavigator;
