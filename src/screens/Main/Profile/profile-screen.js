import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Constant } from '../../../common/constant';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { fetchUserDetail } from '../../../api/api-service';
import Icon from 'react-native-vector-icons/FontAwesome';
import profileUserData from './profile-data';
import { useLogin } from '../../../provider/LoginProvider';
import ProfileTextView from '../../../components/profileTextView/profile-text-component';
import styles from './styles';

const ProfileScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useLogin();
  const [user, setUser] = useState({});
  const [arrayData, setArrayData] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await AsyncStorage.getItem(Constant.USER_DATA);
      const userObj = JSON.parse(userData);
      navigation.setOptions({ title: userObj?.firstName + ' ' + userObj?.lastName });
      await fetchUserDetail(userObj?.id, dataSuccess, dataError);
    };

    const dataSuccess = (userResp) => {
      console.log(JSON.stringify(userResp));
      setUser(userResp);
      setArrayData(profileUserData(userResp))
    }

    const dataError = (error) => {
      // TODO show error
    }

    fetchUser();
  }, []);

  const onPressLogout = async () => {
    AsyncStorage.setItem(Constant.USER_DATA, '');
    setIsLoggedIn(false);
  };




  return (
    <View style={styles.containerBase}>
      <Image style={styles.profileImage} source={user?.image ? { uri: user?.image } : require('../../../assets/images/user.png')} />
      {arrayData.map((data) => {
        return <ProfileTextView itemObj={data} />;
      })}

      <View style={styles.footer} >
        <Button
          buttonStyle={styles.logoutBtn}
          title="Logout"
          onPress={onPressLogout}
          titleStyle={styles.logoutBtnText}
        />
      </View>
    </View>
  );
}

export default ProfileScreen;