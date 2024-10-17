import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Contact = () => {
  const naivgation = useNavigation();

  const handle_navigation = () => {
    naivgation.goBack();
  };
  return (
    <View style={{marginVertical: 'auto', alignItems: 'center'}}>
      <Text style={{fontSize: 40}}>Contact Page</Text>

      <TouchableOpacity onPress={handle_navigation}>
        <Text>Go to Home Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contact;
