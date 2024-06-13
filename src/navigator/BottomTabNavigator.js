import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
// Screens
import HomeScreen from '../screens/Main/Home/home-screen';
import CartScreen from '../screens/Main/Cart/cart-screen';
import ProfileScreen from '../screens/Main/Profile/profile-screen';
import DetailsScreen from '../screens/Main/Home/product-detail/product-detail';
import COLORS from '../config/colors';

const BaseScreenNavigation = () => {

  //Screen names
  const homeName = "Home";
  const detailsName = "Cart";
  const settingsName = "Profile";

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTabStack() {
    return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {``
              iconName = focused ? 'cart' : 'cart-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: COLORS.blue,
          inactiveTintColor: 'grey',
          showLabel: false,
          style: { padding: 10, height: 70 }
        }}>

        <Tab.Screen name={homeName} children={props => <HomeScreen {...props} />} />
        <Tab.Screen name={detailsName} component={CartScreen} />
        <Tab.Screen name={settingsName} component={ProfileScreen} />

      </Tab.Navigator>
    );
  }


  return (
  
      <Stack.Navigator>
        <Stack.Screen
          name=  {"BottomTabStack"}
          component={BottomTabStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
  );


}




export default BaseScreenNavigation;