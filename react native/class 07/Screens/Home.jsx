import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/AntDesign';

const Home = () => {
  const navigation = useNavigation();

  const handle_navigation = () => {
    navigation.navigate('About');
  };
  return (
    <View style={{marginVertical: 'auto', alignItems: 'center'}}>
      {/* <Icon name="home" size={50} color="red" /> */}
      <Text style={{fontSize: 40}}>Home Page</Text>

      <TouchableOpacity onPress={handle_navigation}>
        <Text>Go to About Page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
