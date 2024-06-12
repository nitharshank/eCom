import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Constant } from '../../common/constant';
import { View, Text } from 'react-native';

export default function SettingsScreen({ navigation }) {

  useEffect(() => {
    const getUserData = async () => {
      const userData = await AsyncStorage.getItem(Constant.USER_DATA);
      if (userData !== null) {
        const userObj = JSON.parse(userData);
        console.log(JSON.stringify(userObj?.id));
      }
    };

    getUserData();
  }, []);




  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
    </View>
  );
}