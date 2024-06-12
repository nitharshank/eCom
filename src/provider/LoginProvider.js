import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Constant } from '../common/constant';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem(Constant.USER_DATA);
      if (userData !== null) {
        setIsLoggedIn(true);
        setProfile(JSON.parse(userData));
      }
    };

    getUserData();
  }, []);

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, profile, setProfile }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;
