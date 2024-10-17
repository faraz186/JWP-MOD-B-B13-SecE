import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addCounter, delCounter} from '../store/slices/CounterSlice';

const Counter = () => {
  const {counter} = useSelector(state => state.counterReducer);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(addCounter());
    console.log('increment');
  };

  const decrement = () => {
    dispatch(delCounter());
    console.log('decrement');
  };
  return (
    <View>
      <Text style={{fontSize: 50, textAlign: 'center'}}>Counter {counter}</Text>

      <TouchableOpacity onPress={increment}>
        <Text style={{fontSize: 25}}>Add</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={decrement}>
        <Text style={{fontSize: 25}}>Del</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
