import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Products from './Products';

const Api_Screen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: () => {
              return <AntDesign name="home" size={25} />;
            },
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => {
              return <AntDesign name="infocirlceo" size={25} />;
            },
          }}
          name="About"
          component={About}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => {
              return <AntDesign name="phone" size={25} />;
            },
          }}
          name="Contact"
          component={Contact}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => {
              return <AntDesign name="shoppingcart" size={25} />;
            },
          }}
          name="Products"
          component={Products}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Api_Screen;
