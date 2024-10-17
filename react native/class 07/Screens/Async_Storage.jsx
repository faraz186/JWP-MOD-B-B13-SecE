import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Async_Storage = () => {
  const handle_storeData = async () => {
    let obj = {
      name: 'Muhammad FARAZ',
      city: 'karachi',
      email: 'faraz@gmail.com',
    };
    await AsyncStorage.setItem('userObj', JSON.stringify(obj));
  };

  const handle_GetData = async () => {
    const getData = await AsyncStorage.getItem('userObj');

    console.log('getData===> ', getData);
  };

  const handle_RemoveData = async () => {
    await AsyncStorage.removeItem('username');
  };

  const handle_GetAllKeys = async () => {
    const getAllkeys = await AsyncStorage.getAllKeys();

    console.log(getAllkeys);
  };

  
  return (
    <View>
      <Text
        style={{fontSize: 30, justifyContent: 'center', alignItems: 'center'}}>
        Async_Storage
      </Text>

      <TouchableOpacity onPress={handle_storeData}>
        <Text style={{paddingVertical: 30, fontSize: 20, fontWeight: 'bold'}}>
          Click to store data
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handle_GetData}>
        <Text style={{paddingVertical: 30, fontSize: 20, fontWeight: 'bold'}}>
          Click to get data
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handle_RemoveData}>
        <Text style={{paddingVertical: 30, fontSize: 20, fontWeight: 'bold'}}>
          Click to delete single data
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handle_GetAllKeys}>
        <Text style={{paddingVertical: 30, fontSize: 20, fontWeight: 'bold'}}>
          Click to get all keys
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Async_Storage;
