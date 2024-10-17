import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Firebase = () => {
  const [name, setName] = useState('');
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handle_signup = () => {
    console.log(name, email, username, password);

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        let userObj = {
          name,
          username,
          email,
        };

        console.log(res);
        AsyncStorage.setItem('userObj', JSON.stringify(userObj));
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View>
      <TextInput
        onChangeText={e => setName(e)}
        style={{marginVertical: 10}}
        placeholder="Enter name"
      />
      <TextInput
        onChangeText={e => setusername(e)}
        style={{marginVertical: 10}}
        placeholder="Enter username"
      />
      <TextInput
        onChangeText={e => setemail(e)}
        style={{marginVertical: 10}}
        placeholder="Enter email"
      />
      <TextInput
        onChangeText={e => setpassword(e)}
        style={{marginVertical: 10}}
        placeholder="Enter password"
      />

      <Button onPress={handle_signup} title="signup" color="orange" />
    </View>
  );
};

export default Firebase;
