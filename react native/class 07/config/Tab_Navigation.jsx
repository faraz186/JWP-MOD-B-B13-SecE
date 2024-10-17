import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab_Navigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="About"
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'blue',
          tabBarActiveBackgroundColor: 'black',
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => {
              return <Icon name="home" size={30} color={color} />;
            },
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => {
              return <Icon name="infocirlceo" size={30} color={color} />;
            },
          }}
          name="About"
          component={About}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => {
              return <Entypo name="phone" size={30} color={color} />;
            },
          }}
          name="Contact"
          component={Contact}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tab_Navigation;
