import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import About from '../Screens/About';
import Contact from '../Screens/Contact';

const Stack_Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={Home} />

        <Stack.Screen name="About Screen" component={About} />

        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTitleAlign: 'center',
          }}
          name="Contact Screen"
          component={Contact}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack_Navigation;
