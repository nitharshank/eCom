import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../screens/Main/Home/HomeScreen';
import CartScreen from '../screens/Main/CartScreen';
import ProfileScreen from '../screens/Main/Profile/ProfileScreen';
import COLORS from '../config/colors';

//Screen names
const homeName = "Home";
const detailsName = "Cart";
const settingsName = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
  
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
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
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={CartScreen} />
        <Tab.Screen name={settingsName} component={ProfileScreen} />

      </Tab.Navigator>
  );
}

export default MainContainer;