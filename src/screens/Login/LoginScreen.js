import React, { useState } from 'react'
import { Alert, Image, Pressable, TouchableOpacity, StyleSheet, Switch, Text, Keyboard, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Button } from 'react-native-elements';
import NetInfo from '@react-native-community/netinfo';
import { Constant } from '../../common/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useLogin } from '../../provider/LoginProvider';
import { useLoader } from '../../provider/LoaderProvider';
import COLORS from '../../config/colors';
import { authenticateUser } from '../../api/api-service';
import styles from './styles';
import { ColorSpace } from 'react-native-reanimated';


const LoginScreen = () => {
    const { setIsLoggedIn } = useLogin();
    const { setIsShowLoader } = useLoader();
    const [showPw, setShowPw] = useState(false);

    const [inputs, setInputs] = useState({
        email: { value: 'emilys' },
        password: { value: 'emilyspass' },
    });

    const inputChangedHandler = (inputIdentifier, enteredValue) => {
        setInputs(curInputs => {
            return {
                ...curInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true },
            };
        });
    };

    const onPressShowHidePw = () => {
        setShowPw(!showPw);
    };

    const onAuthSuccess = (resp) => {
        AsyncStorage.setItem(Constant.USER_DATA, JSON.stringify(resp));
        setIsLoggedIn(true);
    };

    const onAuthError = (errorMessage) => {
    };

    const onPressLogin = async () => {
        setIsShowLoader(true);
        await authenticateUser(inputs, onAuthSuccess, onAuthError);
    };


    const checkConnectivity = () => {
        NetInfo.fetch().then(state => {
            if (state.isConnected) {
                Keyboard.dismiss();
                onPressLogin();
            } else {
                // showWarning('No Internet connection');
            }
        });
    };

    return (

        <View style={styles.mainContainer}>
            <KeyboardAwareScrollView>

                <View style={styles.baseContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../../assets/images/logo.png')}
                            style={styles.logoImageContainer}
                        />
                    </View>

                    <Input inputStyle={styles.textInput} placeholder="Enter user id" label="User id" returnKeyType="next"
                        value={inputs.email.value}
                        labelStyle={styles.hintLabelStyle}
                        leftIcon={{
                            type: 'font-awesome',
                            name: 'user',
                            color: COLORS.blue,
                            size: 20,
                        }}
                        onChangeText={value => inputChangedHandler('email', value)}
                    />

                    <Input inputStyle={styles.textInput} placeholder="Enter password" label="Password"
                        labelStyle={styles.hintLabelStyle}
                        value={inputs.password.value}
                        leftIcon={{
                            type: 'font-awesome',
                            name: 'lock',
                            color: COLORS.blue,
                            size: 27,
                        }}
                        rightIcon={
                            <TouchableOpacity onPress={onPressShowHidePw}>
                                <Icon
                                    type="font-awesome"
                                    name={!showPw ? 'eye-slash' : 'eye'}
                                    color={COLORS.blue}
                                    size={24}
                                />
                            </TouchableOpacity>
                        }
                        secureTextEntry={!showPw}
                        onChangeText={value => inputChangedHandler('password', value)}
                    />

                    <Button
                        buttonStyle={styles.loginBtn}
                        title="LOGIN"
                        onPress={onPressLogin}
                        titleStyle={styles.loginBtnText}
                        disabled={
                            inputs.email.value === '' ||
                            inputs.password.value === ''
                        }
                    />

                    <Text style={styles.footerText}>Don't Have Account?<Text style={styles.signup}>  Sign Up</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
};

export default LoginScreen;
