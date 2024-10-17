import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const About = () => {
  const navigation = useNavigation();

  const handle_Contact_Navigation = () => {
    navigation.navigate('Contact');
  };
  return (
    <View style={{marginVertical: 'auto', alignItems: 'center'}}>
      <Text style={{fontSize: 40}}>About Page</Text>

      <TouchableOpacity onPress={handle_Contact_Navigation}>
        <Text>Go to Contact Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;
