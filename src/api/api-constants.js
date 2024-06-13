import AsyncStorage from '@react-native-async-storage/async-storage';
import { Constant } from '../common/constant';

export class APIConstants {
  /** Base urls */

  static BASE_URL = 'https://dummyjson.com/';
  static CONTENT_TYPE = 'application/json';
  static ACTION_LOGIN = 'auth/login';
  static ACTION_FETCH_USER = 'users/';
  static ACTION_FETCH_PRODUCTS = 'products';
  static ACTION_FETCH_PRODUCTS_DETAILS = 'products/';

  static GET = 'GET';
  static POST = 'POST';
}

export const getUserData = async () => {
  const userData = await AsyncStorage.getItem(Constant.USER_DATA);
  return userData;
};